import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { MiscellaneousRoutingModule } from './miscellaneous-routing.module';
import { MiscellaneousComponent } from './miscellaneous.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';

@NgModule({
  imports: [
    ThemeModule,
    MiscellaneousRoutingModule,
    NbButtonModule,
    NbCardModule
  ],
  declarations: [
    MiscellaneousComponent,
    NotFoundComponent
  ],
})
export class MiscellaneousModule { }
