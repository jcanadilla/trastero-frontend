import { Producto } from './producto.model'

export class ArticuloCrear {

  producto: Producto
  caduca: boolean = true;
  fechaCaducidad: Date;
  esPack: boolean = false;
  numPacks: number = 1;
  unidadesPack: number = 1;
  precioTotal: number = 0;
  precioPack: number = 0;
  precioUnidad: number = 0;

}
