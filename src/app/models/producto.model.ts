import { Categoria } from './categoria.model';
import { Tienda } from './tienda.model';
import { Articulo } from './articulo.model';

export class Producto {

  id: number
  constructor(
    public nombre: string,
    public imagen: string,
    public codigo: string,
    public link: string,
    public articulos: Articulo[],
    public categoria: Categoria,
    public tienda: Tienda[]
  ) { }

}
