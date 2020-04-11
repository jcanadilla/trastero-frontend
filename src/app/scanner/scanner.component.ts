import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { ScannerDialogComponent } from './scanner-dialog/scanner-dialog.component';
import { ProductosService } from '../services/productos.service';
import { CrearProductoComponent } from '../pages/productos/dialogs/crear-producto/crear-producto.component';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'ngx-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {


  scannerStarted: Boolean = false

  constructor(private dialogService: NbDialogService, private productosService: ProductosService, private toastrService: NbToastrService) { }

  ngOnInit(): void {

  }

  scan(): void {
    this.dialogService.open(ScannerDialogComponent)
      .onClose.subscribe((codigo) => {
        console.log('CODIGO ESCANEADO!', codigo);
        if (codigo) {
          this.previewProducto(codigo);
        }
      });
  }

  async previewProducto(codigo) {
    // Buscamos el producto
    const productoEncontrado = await this.productosService.findProducto(codigo).toPromise();

    let producto = await this.dialogService.open(CrearProductoComponent, { context: { producto: productoEncontrado } }).onClose.toPromise();

    if (!producto.id) {
      producto = await this.crearProducto(producto);
    }

  }

  async crearProducto(productoComprobado: Producto): Promise<Producto> {
    const created: Producto = await this.productosService.createProducto(productoComprobado).toPromise();
    this.toastrService.success(`${created.nombre} creado correctamente`, 'Producto creado');
    return created;
  }

}
