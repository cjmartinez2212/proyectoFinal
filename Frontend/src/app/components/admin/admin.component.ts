import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service'
import { AdminFormMenuComponent } from '../admin-form-menu/admin-form-menu.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public menuService: MenuService) {}
  ngOnInit(): void {
    this.executeService()
    console.log("Ejecute")
  }

  executeService(){ /* esto es un metodo y son funcionalidades de una clase */
    this.menuService.getMenus().subscribe(
      res => {
        this.menuService.menus = res
        console.log(res)
        return this.menuService.menus
      },
      err => {
        this.menuService.menus = err
        return this.menuService.menus
      }
    )
  }

}
