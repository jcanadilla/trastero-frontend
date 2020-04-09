import { Injectable } from '@angular/core';

import { BackendService } from '../services/backend.service';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriasService {

  constructor(private backend: BackendService) { }

  getCategorias(){
    return this.backend.get('/api/categorias')
  }

}
