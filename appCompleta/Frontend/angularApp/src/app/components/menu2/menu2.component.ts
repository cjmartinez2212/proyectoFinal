import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {
  menu:object[] = [

    {
      name: "PICADA MIXTA:",
      descripcion: "Chiguiro, costillas, mamona, arepa boyacense, Papa salada, plátano, salsa tipo guacamole y ají.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/MIXTA.jpg",
      precio: "$ 26.000"
    },
    {
      name: "PALOS DE LEÑA:",
      descripcion: "Chiguiro , costillas, ,mamona, chorizo , arepa boyacense,Papa salada , plátano , salsa tipo guacamole y ají.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/PALOSDELEA.jpg",
      precio: "$ 28.000"

    },
    {
      name: "COSTILLAS ASADAS:",
      descripcion: "Costillas asadas, arepa boyacense,Papa, plátano , salsa guacamole.",
      imgUrl: "https://angelicavelandia00.github.io/Proyecto_Grupo/Styles/img/Img_menu/COSTILLASASADAS.jpg",
      precio: "$ 26.000"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
