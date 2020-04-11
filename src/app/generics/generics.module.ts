import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDialogModule,
  NbInputModule,
  NbPopoverModule,
  NbSelectModule,
  NbTabsetModule,
  NbTooltipModule,
  NbWindowModule,
  NbLayoutModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// modules
import { ThemeModule } from '../@theme/theme.module';

// components
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';

const COMPONENTS = [
  ConfirmDialogComponent,
];

const ENTRY_COMPONENTS = [
  ConfirmDialogComponent,
];

const MODULES: any[] = [
  FormsModule,
  ThemeModule,
  NbDialogModule.forChild(),
  NbWindowModule.forChild(),
  NbCardModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbPopoverModule,
  NbButtonModule,
  NbInputModule,
  NbSelectModule,
  NbTooltipModule,
  NbLayoutModule,
  Ng2SmartTableModule,
];

const SERVICES = [
];

@NgModule({
  imports: [
    ...MODULES
  ],
  declarations: [
    ...COMPONENTS,
  ],
  providers: [
    ...SERVICES,
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS,
  ],
  exports: [
    ...MODULES,
  ]
})
export class GenericsModule {

}
