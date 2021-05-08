import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' /* permite hacer peticiones al API */
import { Bebida } from '../models/Bebida' //
import { Aperitivo } from '../models/Aperitivo'
import { PlatoFuerte } from '../models/PlatoFuerte'
import { Postres } from '../models/Postres'
import { Menu } from '../models/Menu'

@Injectable({
  providedIn: 'root' 
})
export class MenuService {

  URL_API = "http://localhost:5000" //

  selectedMenu: Menu = {
    _id: '',
    nombre: '',
    precio: '',
    descripcion: '',
    imagen: '',
    categoria: ''
  }

  bebidas:Bebida[];
  aperitivo:Aperitivo[];
  platoFuerte:PlatoFuerte[];
  postres:Postres[];
  menus: Menu[] //

  constructor(private http: HttpClient) { } //

  //peticion http a express
  getAperitivos(){ 
    return this.http.get<Aperitivo[]>(`${this.URL_API}/aperitivos`) 
  }
  
  getPlatoFuerte(){ 
    return this.http.get<PlatoFuerte[]>(`${this.URL_API}/platoFuerte`) 
  }

  getPostres(){ 
    return this.http.get<Postres[]>(`${this.URL_API}/postres`) 
  }

  getBebidas(){ 
    return this.http.get<Bebida[]>(`${this.URL_API}/bebidas`) 
  }

  //administracion

  getMenus(){
    return this.http.get<Menu[]>(this.URL_API)
  }
  
  createMenu(menu: Menu){
    return this.http.post(this.URL_API, menu)
  }

  deleteMenu(_id: string){
    return this.http.delete(`${this.URL_API}/${_id}`)
  }

  updateMenu(menu: Menu){
    return this.http.put(`${this.URL_API}/${menu._id}`, menu)
  }
}
