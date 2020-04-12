import { Component, OnInit } from '@angular/core';
import { ArticuloCrear } from '../../../../models/articulo-crear.model';
import { NbDialogRef } from '@nebular/theme';
import { ConfirmDialogComponent } from '../../../../generics/dialog/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'ngx-crear-articulo',
  templateUrl: './crear-articulo.component.html',
  styleUrls: ['./crear-articulo.component.scss']
})
export class CrearArticuloComponent implements OnInit {


  articuloCrear: ArticuloCrear;

  constructor(protected ref: NbDialogRef<ConfirmDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.articuloCrear);
  }

  cancel() {
    this.ref.close();
  }

  submit(f) {
    console.log(this.articuloCrear);
    this.ref.close(this.articuloCrear);
  }

  calcularPrecios() {
    this.articuloCrear.precioPack = this.articuloCrear.precioTotal / this.articuloCrear.numPacks;
    this.articuloCrear.precioUnidad = this.articuloCrear.precioPack / this.articuloCrear.unidadesPack;
  }

}
