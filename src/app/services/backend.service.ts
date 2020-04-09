import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';


@Injectable()
export class BackendService {
  
  constructor(private http: HttpClient) { }

  get(path):Observable<any>{
    return this.http.get(`${path}`);
  }

}