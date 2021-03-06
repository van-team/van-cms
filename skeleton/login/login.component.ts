import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { BitService, BitSupportService } from 'ngx-bit';
import { StorageMap } from '@ngx-pwa/local-storage';
import { switchMap } from 'rxjs/operators';
import { MainService } from '../main.service';
import * as packer from './language';

@Component({
  selector: 'van-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  users: any[] = [];
  logining = false;

  constructor(
    public bit: BitService,
    private mainService: MainService,
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder,
    private support: BitSupportService,
    private storageMap: StorageMap
  ) {
  }

  ngOnInit(): void {
    this.bit.registerLocales(packer);
    this.form = this.fb.group({
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
      password: [null, [Validators.required, Validators.minLength(12), Validators.maxLength(20)]],
      remember: [1, [Validators.required]]
    });
    this.storageMap.get('users').subscribe((data: Set<string>) => {
      if (data) {
        this.users = [...data.keys()];
      }
    });
  }

  addUsername(username: string): void {
    this.storageMap.get('users').pipe(
      switchMap((data: Set<string>) =>
        this.storageMap.set('users', data ? data.add(username) : new Set([username]))
      )
    ).subscribe(() => {
    });
  }

  deleteUsername(event: any, username: string): void {
    this.storageMap.get('users').pipe(
      switchMap((data: Set<string>) => {
        data.delete(username);
        this.users = [...data.keys()];
        return this.storageMap.set('users', data);
      })
    ).subscribe(() => {
    });
    event.stopPropagation();
  }

  submit(data: any): void {
    this.logining = true;
    this.mainService.login(data.username, data.password).subscribe(res => {
      switch (res.error) {
        case 0:
          this.support.clearStorage();
          if (data.remember) {
            this.addUsername(data.username);
          }
          this.notification.success(this.bit.l.auth, this.bit.l.loginSuccess);
          this.router.navigateByUrl('/');
          break;
        case 1:
          this.notification.error(this.bit.l.auth, this.bit.l.loginError);
          break;
        case 2:
          this.notification.error(this.bit.l.auth, this.bit.l.loginManyTimes);
          break;
      }
      this.logining = false;
    });
  }
}
