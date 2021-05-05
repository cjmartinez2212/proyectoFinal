import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  menu:object[] = [

    {
      name: "BRAZO GITANO:",
      descripcion: "Preparación de bizcocho de vainilla remojado en almíbar relleno de crema chantilly y frutos. Espolvoreado con azúcar impalpable.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/brazo-gitano.jpg",
      precio: "$ 8.000"
    },
    {
      name: "MILHOJA DE CAFÉ:",
      descripcion: "Láminas de hojaldre rellenas con crema pastelera de café.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/milhojas-age-m.jpg",
      precio: "$ 8.000"

    },
    {
      name: "CHESSCAKE:",
      descripcion: "Base de galleta sultana, mezcla de queso crema y frutos, acompañado de merengue suizo. 200 GR PORCIÓN.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/cheesecake_de_pie_de_limon.png",
      precio: "$ 10.000"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
