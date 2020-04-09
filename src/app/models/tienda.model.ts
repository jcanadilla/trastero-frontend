import { Producto } from './producto.model';

export class Tienda {

  id: number
  constructor(
    public nombre: string,
    public productos: Producto[]
  ) { }

}
