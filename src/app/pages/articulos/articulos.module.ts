import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticulosRoutingModule } from './articulos-routing.module';
import { ArticulosComponent, FsIconComponent } from './articulos.component';
import { CrearArticuloComponent } from './dialogs/crear-articulo/crear-articulo.component';
import { GenericsModule } from '../../generics/generics.module';
import { NombreProductoRendererComponent } from './renderers/nombre-producto-renderer/nombre-producto-renderer.component';
import { FechaCaducidadRendererComponent } from './renderers/fecha-caducidad-renderer/fecha-caducidad-renderer.component';


@NgModule({
  declarations: [ArticulosComponent,
    CrearArticuloComponent,
    NombreProductoRendererComponent,
    FechaCaducidadRendererComponent,
    FsIconComponent,
  ],
  imports: [
    CommonModule,
    ArticulosRoutingModule,
    GenericsModule
  ]
})
export class ArticulosModule { }
