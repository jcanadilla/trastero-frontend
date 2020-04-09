import { Injectable, Type } from '@angular/core';

import { Categoria } from '../models/categoria.model';

const CATEGORIAS = [
  new Categoria('Lácteos', 'awdasd' ,'red'),
  new Categoria('Pasta', 'awdasd' ,'yellow'),
  new Categoria('Limpieza', 'awdasd' ,'blue')
];

@Injectable()
export class BackendService {
  constructor() { }

  getAll(type: Type<any>): PromiseLike<any[]> {
    if (type === Categoria) {
      // TODO: get from the database
      return Promise.resolve<Categoria[]>(CATEGORIAS);
    }
    let err = new Error('Cannot get object of this type');
    console.error(err);
    throw err;
  }
}