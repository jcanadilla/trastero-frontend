import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriasRoutingModule } from './categorias-routing.module';
import { CategoriasComponent } from './categorias.component';
import { GenericsModule } from '../../generics/generics.module';
import { CustomRenderComponent } from './custom-render-component/custom-render-component.component';


@NgModule({
  declarations: [CategoriasComponent, CustomRenderComponent],
  imports: [
    CommonModule,
    CategoriasRoutingModule,
    GenericsModule
  ],
})
export class CategoriasModule { }
