import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { CrearProductoComponent } from './dialogs/crear-producto/crear-producto.component';
import { GenericsModule } from '../../generics/generics.module';


@NgModule({
  declarations: [ProductosComponent, CrearProductoComponent],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    GenericsModule
  ],
})
export class ProductosModule { }
