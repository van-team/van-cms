import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { BitHttpService } from 'ngx-bit';

@Injectable()
export class ResourceService {
  private model = 'resource';

  constructor(private http: BitHttpService) {
  }

  originLists(): Observable<any> {
    return this.http.originLists(this.model);
  }

  add(data: any): Observable<any> {
    return this.http.add(this.model, data);
  }

  get(id: any): Observable<any> {
    return this.http.get(this.model, id);
  }

  edit(data: any): Observable<any> {
    return this.http.edit(this.model, data);
  }

  delete(id: any[]): Observable<any> {
    return this.http.delete(this.model, id);
  }

  /**
   * Resource Sort
   */
  sort(data: any[]): Observable<any> {
    return this.http.req(this.model + '/sort', {
      data
    });
  }

  /**
   * Validate Resource Key
   */
  validedKey(key: string, edit: Observable<string> = of(null)): Observable<any> {
    return edit.pipe(
      switchMap(editKey => {
        if (key !== editKey) {
          return this.http.req(this.model + '/validedKey', {
            key
          });
        }
        return of({
          error: 0,
          data: {
            exists: false
          }
        });
      }),
      map(res => {
        if (res.error === 1) {
          return false;
        }
        return !res.data.exists;
      })
    );
  }
}
