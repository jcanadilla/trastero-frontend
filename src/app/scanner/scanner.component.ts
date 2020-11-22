import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ScannerDialogComponent } from './scanner-dialog/scanner-dialog.component';
import { ProductosService } from '../services/productos.service';
import { CrearProductoComponent } from '../pages/productos/dialogs/crear-producto/crear-producto.component';
import { Producto } from '../models/producto.model';
import { CrearArticuloComponent } from '../pages/articulos/dialogs/crear-articulo/crear-articulo.component';
import { ArticulosService } from '../services/articulos.service';
import { ArticuloCrear } from '../models/articulo-crear.model';

@Component({
  selector: 'ngx-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {


  scannerStarted: Boolean = false

  constructor(
    private productosService: ProductosService,
    private articulosService: ArticulosService,
    private dialogService: NbDialogService,
    private toastrService: NbToastrService) { }

  ngOnInit(): void {

  }

  async scan() {
    let codigo;
    try {
      codigo = await this.dialogService.open(ScannerDialogComponent).onClose.toPromise();
    } catch (e) {
      this.toastrService.danger('Ha ocurrido un error al escanear el producto', 'Error al escanear');
      throw e;
    }

    console.log('CODIGO ESCANEADO!', codigo);
    if (codigo) {
      this.previewProducto(codigo);
    }
  }

  async previewProducto(codigo) {
    // Buscamos el producto
    let producto;
    try {
      const productoEncontrado = await this.productosService.findProducto(codigo).toPromise();

      producto = await this.dialogService.open(CrearProductoComponent, { context: { producto: productoEncontrado } }).onClose.toPromise();

      if (producto) {
        if (!producto.id) {
          producto = await this.crearProducto(producto);
        } else {
          producto = await this.editarProducto(producto);
        }
        this.crearArticulo(producto);
      } else {
        this.toastrService.warning('Operación cancelada', 'Crear producto');
      }

    } catch (e) {
      this.toastrService.danger('Ha ocurrido un error al buscar el producto', 'Error al buscar el producto');
      throw e;
    }
  }

  async crearProducto(productoComprobado: Producto): Promise<Producto> {
    const created: Producto = await this.productosService.createProducto(productoComprobado).toPromise();
    if (created) {
      this.toastrService.success(`${created.nombre} creado correctamente`, 'Producto creado');
      return created;
    }
    return null;
  }

  async editarProducto(productoComprobado: Producto): Promise<Producto> {
    const edited: Producto = await this.productosService.editProducto(productoComprobado).toPromise();
    if (edited) {
      this.toastrService.success(`${edited.nombre} editado correctamente`, 'Producto editado');
      return edited;
    }
    return null;
  }

  async crearArticulo(producto) {
    let articuloCrear = new ArticuloCrear();
    articuloCrear.producto = producto;
    try {
      articuloCrear = await this.dialogService.open(CrearArticuloComponent, { context: { articuloCrear } }).onClose.toPromise();
    } catch (e) {
      this.toastrService.danger('Ha ocurrido un error al crear el artículo', 'Error');
      throw (e);
    }
    if (articuloCrear) {
      try {
        const response = await this.articulosService.almacenar(articuloCrear).toPromise();
        this.toastrService.success('El artículo se ha almacenado correctamente', 'Artículo almacenado');
      } catch (e) {
        console.error(e.message);
        this.toastrService.danger('No se ha podido almacenar el articulo', 'Error');
      }
    } else {
      this.toastrService.warning('Operación cancelada', 'Almacenamiento de artículo');
    }
  }

}
