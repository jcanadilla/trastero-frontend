import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'ngx-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
      descripcion: {
        title: 'Descripción',
        type: 'string',
      },
      color: {
        title: 'Color',
        type: 'string',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private categoriasService: CategoriasService) {
    const data = this.categoriasService.getCategorias();
    this.source.load(data);
  }

  ngOnInit(): void {

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
