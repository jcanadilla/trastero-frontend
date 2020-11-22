import { Component, OnInit, Input } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ArticulosService } from '../../services/articulos.service';
import { Articulo } from '../../models/articulo.model';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { ProductosService } from '../../services/productos.service';
import { map } from 'rxjs/operators';
import _ from 'lodash';
import * as moment from 'moment';
import { Producto } from '../../models/producto.model';

interface ProductoArticuloEntry {
  // Producto
  nombre: string,
  codigo: string,
  cantidad?: number,
  caduca?: Boolean,
  tipo: string,
  // Articulos
  fechaCaducidad?: Date,
}

@Component({
  selector: 'ngx-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})
export class ArticulosComponent implements OnInit {
  customColumn = 'nombre';
  defaultColumns = [
    'tipo',
    'codigo',
    'cantidad',
    'caduca',
    'fechaCaducidad'
  ];
  allColumns = [this.customColumn, ...this.defaultColumns];

  dataSource: NbTreeGridDataSource<ProductoArticuloEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  productos: any;

  constructor(
    private productosService: ProductosService,
    private dataSourceBuilder: NbTreeGridDataSourceBuilder<ProductoArticuloEntry>
  ) {
  }

  ngOnInit(): void {
    this.getArticulos();
  }

  async getArticulos() {
    moment.locale(navigator.language);
    this.productos = await this.productosService.getProductos()
      .pipe(map((productos) => _.map(productos, (producto) => {

        let result = {
          data: {
            nombre: producto.nombre,
            codigo: producto.codigo,
            cantidad: producto.articulos.length,
            caduca: producto.caduca,
            fechaCaducidad: null,
            tipo: 'producto',
          },
          children: []
        };
        const children = _.map(producto.articulos, a => ({
          data: {
            nombre: producto.nombre,
            caduca: producto.caduca,
            fechaCaducidad: moment(a.fechaCaducidad).format('ll'),
            tipo: 'articulo',
          }
        }));
        result.children.push(...children);
        return result;
      })
      )).toPromise();
    console.log('PRODUCTOS:', this.productos);
    this.dataSource = this.dataSourceBuilder.create(this.productos);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isProduct()">
    </nb-tree-grid-row-toggle>

  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isProduct(): boolean {
    return this.kind === 'producto';
  }
}
