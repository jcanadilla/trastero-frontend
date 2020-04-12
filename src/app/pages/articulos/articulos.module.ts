import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent } from './articulos.component';
import { CrearArticuloComponent } from './dialogs/crear-articulo/crear-articulo.component';
import { GenericsModule } from '../../generics/generics.module';


@NgModule({
  declarations: [ArticulosComponent, CrearArticuloComponent],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    GenericsModule
  ]
})
export class ArticulosModule { }
