let nextId = 1;

export class Categoria {
  id: number;
  constructor(
    public nombre: string,
    public descripcion?: string,
    public color?: string) {
      this.id = nextId++;
    }
}
