export class Menu {
  //atributos
  nombre: String;
  precio: String;
  categoria: String;
  descripcion: String;
  imagen: String;
  updatedAt?: String;
  createdAt?: String;
  _id?: String;

  //constructor
  constructor(
    nombre = "",
    precio = "",
    categoria = "",
    descripcion = "",
    imagen = "",
    _id = ""
  ) {
    this._id = _id;
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}
