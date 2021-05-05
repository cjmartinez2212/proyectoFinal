import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {

  menu:object[] = [

    {
      name: "JUGOS NATURALES:",
      descripcion: "Jugos en agua-leche.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/jusgos-naturales.jpg",
      precio: "$ 4.000-6000"
    },
    {
      name: "LIMONADA:",
      descripcion: "Jarra de 2 Litros, endulzada con panela.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/limonada.jpg",
      precio: "$ 16.000"

    },
    {
      name: "Cervezas:",
      descripcion: "Cerveza nacional e importada.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/cervezas.jpg",
      precio: "$ 7.000"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
