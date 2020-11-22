import { Producto } from './producto.model';

export class Articulo {

  id: number;
  constructor(
    public fechaCaducidad: Date,
    public fechaCompra: Date,
    public gastado: Boolean,
    public esPack: Boolean,
    public precio: number,
    public precioUnidad: number,
    public producto: Producto,
  ) { }

}
