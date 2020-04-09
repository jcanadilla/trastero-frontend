import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';


@Injectable()
export class BackendService {

  constructor(private http: HttpClient) { }

  get(path): Observable<any> {
    return this.http.get(`${path}`);
  }

  post(path, params): Observable<any> {
    return this.http.post(`${path}`, params);
  }

  put(path, params): Observable<any> {
    return this.http.put(`${path}`, params);
  }

}
