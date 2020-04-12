import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Observable } from 'rxjs';
import { Articulo } from '../models/articulo.model';
import { ArticuloCrear } from '../models/articulo-crear.model';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private backend: BackendService) { }

  almacenar(articuloCrear: ArticuloCrear) {
    return this.backend.post('/api/articulos/almacenar', articuloCrear);
  }

  getArticulos() {
    return this.backend.get('/api/articulos')
  }

  createArticulo(articulo: Articulo) {
    return this.backend.post('/api/articulos', articulo)
  }

  editArticulo(articulo: Articulo) {
    return this.backend.put('/api/articulos', articulo)
  }

  deleteArticulo(articulo: Articulo) {
    return this.backend.delete(`/api/articulos/${articulo.id}`)
  }
}
