import { Injectable } from '@angular/core';

import { BackendService } from '../services/backend.service';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private categorias: Categoria[] = [];

  constructor(private backend: BackendService) { }

  getCategorias() {
    this.backend.get('/api/categorias').subscribe((categorias: Categoria[]) => {
      console.log(`Fetched ${categorias.length} categorias.`);
      this.categorias.push(...categorias); // fill cache
    });
  }

}
