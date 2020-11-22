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
  NbDatepickerModule,
  NbBadgeModule,
  NbTreeGridModule,
  NbIconModule,
} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// modules
import { ThemeModule } from '../@theme/theme.module';

// components
import { ConfirmDialogComponent } from './dialog/confirm-dialog/confirm-dialog.component';
import { CategoriaBadgeComponent } from './categoria-badge/categoria-badge.component';

const COMPONENTS = [
  ConfirmDialogComponent,
  CategoriaBadgeComponent
];

const ENTRY_COMPONENTS = [
  ConfirmDialogComponent,
  CategoriaBadgeComponent
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
  NbDatepickerModule,
  NbTreeGridModule,
  NbIconModule,
  Ng2SmartTableModule,
  NbBadgeModule
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
    CategoriaBadgeComponent
  ]
})
export class GenericsModule {

}
