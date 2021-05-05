import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' /* permite hacer peticiones al API */
import { Menu } from '../models/Menu' //

@Injectable({
  providedIn: 'root' 
})
export class MenuService {

  URL_API = "http//localhost:5000/api" //

  menu:Menu[]; //

  constructor(private http: HttpClient) { } //

  //peticion http a express
  getMenu(){ 
    return this.http.get<Menu[]>(this.URL_API) 
  }  
}
