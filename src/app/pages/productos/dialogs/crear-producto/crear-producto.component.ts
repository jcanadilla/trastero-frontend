import { Component, OnInit } from '@angular/core';
import { ConfirmDialogComponent } from '../../../../generics/dialog/confirm-dialog/confirm-dialog.component';
import { NbDialogRef } from '@nebular/theme';
import { Producto } from '../../../../models/producto.model';
import { NgForm } from '@angular/forms';
import { Categoria } from '../../../../models/categoria.model';
import { CategoriasService } from '../../../../services/categorias.service';

@Component({
  selector: 'ngx-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.scss']
})
export class CrearProductoComponent implements OnInit {

  producto: Producto;
  categorias: Categoria[];
  categoriaSelectedIndex: number;
  constructor(protected ref: NbDialogRef<ConfirmDialogComponent>, private categoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  async getCategorias() {
    this.categorias = await this.categoriasService.getCategorias().toPromise();
  }

  cancel() {
    this.ref.close();
  }

  submit(f) {
    console.log(f);
    console.log(this.producto);
    this.ref.close(this.producto);
  }

  onCategoriaSelected(index) {
    this.producto.categoria = this.categorias[index];
  }

}
