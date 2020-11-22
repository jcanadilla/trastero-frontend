import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { CategoriasService } from '../../services/categorias.service';
import { Categoria } from '../../models/categoria.model';
import { NbDialogService } from '@nebular/theme';
import { ConfirmDialogComponent } from '../../generics/dialog/confirm-dialog/confirm-dialog.component'
import { Colores } from '../../models/colores';
import { CustomRenderComponent } from './custom-render-component/custom-render-component.component';
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
        editable: false,
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
        type: 'custom',
        renderComponent: CustomRenderComponent,
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccionar...',
            list: Colores.map(value => {
              return { "value": value, "title": value }
            }),
          },
        },
        editor: {
          type: "list",
          config: {
            list: Colores.map(value => {
              return { "value": value, "title": value }
            }),
          }

        }
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private categoriasService: CategoriasService, private dialogService: NbDialogService) {

  }

  ngOnInit(): void {
    this.categoriasService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias.push(...categorias);
      this.refreshTable();
    });
  }

  refreshTable() {
    this.source.load(this.categorias);
  }

  onDeleteConfirm(event): void {
    // data: Object - data object to delete
    // source: DataSource - table data source
    // confirm: Deferred - Deferred object with resolve() and reject() methods.
    this.dialogService.open(ConfirmDialogComponent)
      .onClose.subscribe(name => {
        const categoria = event.data as Categoria;
        this.categoriasService.deleteCategoria(categoria).subscribe(
          (categoria: Categoria) => {
            console.log("Deleted!", categoria)
            event.confirm.resolve();
          },
          (error) => {
            event.confirm.reject();
          }
        );
      },
        (error) => {
          event.confirm.reject();
        }
      );
  }

  onCreateConfirm(event): void {
    // newData: Object - data entered in a new row
    // source: DataSource - table data source
    // confirm: Deferred - Deferred object with resolve(newData: Object) and reject() methods.
    const categoria = event.newData as Categoria;
    delete categoria.id;
    this.categoriasService.createCategoria(categoria).subscribe(
      (categoria: Categoria) => {
        console.log("Created!", categoria)
        event.confirm.resolve();
      },
      (error) => {
        event.confirm.reject();
      }
    );
  }

  onEditConfirm(event): void {
    // newData: Object - data entered in a new row
    // source: DataSource - table data source
    console.log(event.newData)
    console.log(event.source)
    const categoria = event.newData as Categoria;
    this.categoriasService.editCategoria(categoria).subscribe(
      (categoria: Categoria) => {
        console.log("Edited!", categoria)
        event.confirm.resolve();
      },
      (error) => {
        event.confirm.reject();
      }
    );
  }

}
