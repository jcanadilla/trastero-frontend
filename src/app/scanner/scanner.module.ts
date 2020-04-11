import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { GenericsModule } from '../generics/generics.module';
import { NbLayoutModule, NbInputModule, NbCardModule } from '@nebular/theme';
import { ScannerDialogComponent } from './scanner-dialog/scanner-dialog.component';



@NgModule({
  declarations: [ScannerComponent, ScannerDialogComponent],
  imports: [
    CommonModule,
    GenericsModule,
  ],
  exports: [ScannerComponent]
})
export class ScannerModule { }
