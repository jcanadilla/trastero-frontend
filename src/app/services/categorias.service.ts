import { Injectable } from '@angular/core';

import { BackendService } from '../services/backend.service';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {

  constructor(private backend: BackendService) { }

  getCategorias() {
    return this.backend.get('/api/categorias')
  }

  createCategoria(categoria: Categoria) {
    return this.backend.post('/api/categorias', categoria)
  }

  editCategoria(categoria: Categoria) {
    return this.backend.put('/api/categorias', categoria)
  }

  deleteCategoria(categoria: Categoria) {
    return this.backend.delete(`/api/categorias/${categoria.id}`)
  }

}
