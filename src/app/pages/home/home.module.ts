import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { GenericsModule } from '../../generics/generics.module';
import { ScannerModule } from '../../scanner/scanner.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    GenericsModule,
    ScannerModule
  ],
})
export class HomeModule { }
