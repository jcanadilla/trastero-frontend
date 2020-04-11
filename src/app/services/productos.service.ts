import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Producto } from '../models/producto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private backend: BackendService) { }

  findProducto(codigo: string): Observable<Producto> {
    return this.backend.get(`/api/productos/codigo/${codigo}`);
  }

  getProductos() {
    return this.backend.get('/api/productos')
  }

  createProducto(producto: Producto) {
    return this.backend.post('/api/productos', producto)
  }

  editProducto(producto: Producto) {
    return this.backend.put('/api/productos', producto)
  }

  deleteProducto(producto: Producto) {
    return this.backend.delete(`/api/productos/${producto.id}`)
  }
}
