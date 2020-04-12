import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/articulo.model';
import { NombreProductoRendererComponent } from './renderers/nombre-producto-renderer/nombre-producto-renderer.component';
import { FechaCaducidadRendererComponent } from './renderers/fecha-caducidad-renderer/fecha-caducidad-renderer.component';

@Component({
  selector: 'ngx-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {

  settings = {
    mode: "inline",
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      producto: {
        title: 'Producto',
        type: 'custom',
        renderComponent: NombreProductoRendererComponent
      },
      fechaCaducidad: {
        title: 'Fecha caducidad',
        type: 'custom',
        renderComponent: FechaCaducidadRendererComponent,
      },
      color: {
        title: 'Color',
        type: 'string',
      },
    },
  };

  articulos: Articulo[];
  source: LocalDataSource = new LocalDataSource();

  constructor(private articulosService: ArticulosService) { }

  ngOnInit(): void {
    this.getArticulos();
  }

  async getArticulos() {
    this.articulos = await this.articulosService.getArticulos().toPromise();
    this.refreshTable();
  }

  refreshTable() {
    this.source.load(this.articulos);
  }

  onDeleteConfirm(event) {

  }

  async onCreateConfirm(event) {
    const articulo = event.newData as Articulo;
    try {
      const articuloCreado = await this.articulosService.createArticulo(articulo).toPromise();
      event.confirm.resolve();
    } catch (e) {
      event.confirm.reject();
    }
  }

  onEditConfirm(event) {

  }


  onComponentInitFunction(render) {
    console.log(render);
  }
}
