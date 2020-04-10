import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Tienda } from '../models/tienda.model';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TiendasService {

  private tiendas: Tienda[] = [];

  constructor(private backend: BackendService) { }

  getTiendas(): Observable<Tienda[]> {
    return this.backend.get('/api/tiendas');
  }

  createTienda(tienda: Tienda): Observable<Tienda> {
    return this.backend.post('api/tiendas', tienda);
  }

  editTienda(tienda: Tienda): Observable<Tienda> {
    return this.backend.put(`api/tiendas`, tienda);
  }

  deleteTienda(tienda: Tienda) {
    return this.backend.delete(`api/tiendas/${tienda.id}`);
  }

}
