import { Component, OnInit } from '@angular/core';
import { TiendasService } from '../../services/tiendas.service';
import { Tienda } from '../../models/tienda.model';
import { LocalDataSource } from 'ng2-smart-table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ngx-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.scss'],
})
export class TiendasComponent implements OnInit {

  settings = {
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
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      nombre: {
        title: 'Nombre',
        type: 'string',
      },
    },
    noDataMessage: 'No hay tiendas que mostrar'
  };

  source: LocalDataSource;

  constructor(private tiendasService: TiendasService, http: HttpClient) {
    this.source = new LocalDataSource();
  }

  ngOnInit(): void {
    this.getTiendas();
  }

  getTiendas(): void {
    this.tiendasService.getTiendas()
      .subscribe(tiendas => (this.source.load(tiendas)));
  }

  onCreateConfirm(event): void {
    const tienda = event.newData as Tienda;
    this.tiendasService.createTienda(tienda).subscribe(
      (tienda: Tienda) => {
        this.getTiendas();
        event.confirm.resolve();
      },
      (error) => {
        event.confirm.reject();
      }
    );
  }

  onEditConfirm(event): void {
    const tienda = event.newData as Tienda;
    this.tiendasService.editTienda(tienda).subscribe(
      (tienda) => {
        this.getTiendas();
        event.confirm.resolve();
      },
      (error) => {
        event.confirm.reject();
      }
    );
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      const tienda = event.data as Tienda;
      this.tiendasService.deleteTienda(tienda).subscribe(
        (result) => {
          this.getTiendas();
          this.getTiendas();
          event.confirm.resolve();
        },
        (error) => {
          event.confirm.reject();
        }
      )
    } else {
      event.confirm.reject();
    }
  }

}
