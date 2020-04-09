import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'ngx-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {

  categorias: Categoria[] = [];

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

  }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias.push(...categorias);
      this.refreshTable();
    });
  }

  refreshTable(){
    this.source.load(this.categorias);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onCreateConfirm(event): void {
    // newData: Object - data entered in a new row
    // source: DataSource - table data source
    // confirm: Deferred - Deferred object with resolve(newData: Object) and reject() methods.
    const categoria=event.newData as Categoria;
    this.categoriasService.createCategoria(categoria).subscribe((categoria: Categoria) => {
      this.categorias.push(categoria);
      this.refreshTable();
    });
  }

  onEditConfirm(event): void {
    // newData: Object - data entered in a new row
    // source: DataSource - table data source
    console.log(event.newData)
    console.log(event.source)
    const categoria=event.newData as Categoria;
    this.categoriasService.editCategoria(categoria)
  }

}
