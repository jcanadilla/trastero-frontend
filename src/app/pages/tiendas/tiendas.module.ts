import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TiendasRoutingModule } from './tiendas-routing.module';
import { TiendasComponent } from './tiendas.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NbCardModule } from '@nebular/theme';


@NgModule({
  declarations: [TiendasComponent],
  imports: [
    CommonModule,
    TiendasRoutingModule,
    Ng2SmartTableModule,
    NbCardModule,
  ],
})
export class TiendasModule { }
