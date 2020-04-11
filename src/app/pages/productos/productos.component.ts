import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'ngx-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {

  productos: Producto[];
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.getProductos();
  }

  async getProductos() {
    this.productos = await this.productosService.getProductos().toPromise();
    console.log(this.productos);
  }

}
