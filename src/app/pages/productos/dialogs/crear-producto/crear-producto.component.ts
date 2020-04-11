import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../../../../generics/dialog/confirm-dialog/confirm-dialog.component';
import { NbDialogRef } from '@nebular/theme';
import { Producto } from '../../../../models/producto.model';

@Component({
  selector: 'ngx-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  crearOContinuar = 'crear';
  producto: Producto
  constructor(protected ref: NbDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
    if (this.producto.id) {
      this.crearOContinuar = 'Continuar';
    }
  }

  cancel() {
    this.ref.close();
  }

  submit() {
    this.ref.close(this.producto);
  }

}
