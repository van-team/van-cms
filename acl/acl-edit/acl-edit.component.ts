import { Component, OnInit } from '@angular/core';
import { BitSwalService, BitService } from 'ngx-bit';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { asyncValidator } from 'ngx-bit/operates';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { AsyncSubject } from 'rxjs';
import { AclService } from '../acl.service';
import * as packer from './language';

@Component({
  selector: 'van-acl-edit',
  templateUrl: './acl-edit.component.html'
})
export class AclEditComponent implements OnInit {
  private id: number;
  private keyAsync: AsyncSubject<string> = new AsyncSubject();
  form: FormGroup;
  writeLists: string[] = ['add', 'edit', 'delete'];
  readLists: string[] = ['get', 'originLists', 'lists'];

  constructor(
    public bit: BitService,
    private fb: FormBuilder,
    private notification: NzNotificationService,
    private swal: BitSwalService,
    private route: ActivatedRoute,
    private aclService: AclService
  ) {
  }

  ngOnInit(): void {
    this.bit.registerLocales(packer);
    this.form = this.fb.group({
      name: this.fb.group(
        this.bit.i18nGroup({
          validate: {
            zh_cn: [Validators.required],
            en_us: [Validators.required]
          }
        })
      ),
      key: [null, [Validators.required], [this.existsKey]],
      write: [[]],
      read: [[]],
      status: [true, [Validators.required]]
    });
    this.route.params.subscribe(param => {
      this.id = param.id;
      this.getData();
    });
  }

  existsKey = (control: AbstractControl) => {
    return asyncValidator(this.aclService.validedKey(control.value, this.keyAsync));
  };

  getData(): void {
    this.aclService.get(this.id).subscribe(data => {
      const name = this.bit.i18nParse(data.name);
      this.keyAsync.next(data.key);
      this.keyAsync.complete();
      const write = !data.write ? [] : data.write.split(',');
      const read = !data.read ? [] : data.read.split(',');
      this.form.patchValue({
        name,
        key: data.key,
        write,
        read,
        status: data.status
      });
    });
  }

  /**
   * 提交
   */
  submit(data): void {
    Reflect.set(data, 'id', this.id);
    this.aclService.edit(data).pipe(
      switchMap(res => this.swal.editAlert(res))
    ).subscribe(status => {
      if (status) {
        this.getData();
      }
    });
  }
}
