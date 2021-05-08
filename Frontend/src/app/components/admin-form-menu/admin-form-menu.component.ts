import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service'
import { Menu } from '../../models/Menu'
import { NgForm } from '@angular/forms'
import Swal from 'sweetalert2'
import { AdminComponent } from '../admin/admin.component';

@Component({
  selector: 'app-admin-form-menu',
  templateUrl: './admin-form-menu.component.html',
  styleUrls: ['./admin-form-menu.component.css']
})
export class AdminFormMenuComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  VIEW: AdminComponent

  ngOnInit(): void {
    this.executeService()
  }

  /* Metodos = funciones */

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

  updateService(product: Menu){
    this.menuService.selectedMenu = product;
  }

  createService(form?: NgForm){
    if (!form.value._id){
      this.menuService.createMenu(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Menu Creado',
            'El Menu se creo correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log("Error", err)
          Swal.fire(
            'Menu No Creado',
            'El Menu no se creo correctamente',
            'error'
          )
          return err
        }
      )
    } else {
      this.menuService.updateMenu(form.value).subscribe(
        res => {
          console.log(res)
          Swal.fire(
            'Menu Actualizado',
            'El Menu se Actualizó correctamente',
            'success'
          )
          this.executeService()
          return res
        },
        err => {
          console.log(err)
          return err
        }
      )
    }
    this.cleanForm(form)
    setTimeout(() => {
      location.reload()
    }, 2000) 
  }

  cleanForm(form?: NgForm){
    if(form){
      form.reset()
      this.menuService.selectedMenu = new Menu()
      this.executeService()
    }
  }

  deleteService(_id: string){
    Swal.fire({
      title: '¿Estas seguro que deseas eliminar este platillo?',
      text: "Recuerda que no puedes revertir esta accion",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!',
      cancelButtonText: 'No!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.menuService.deleteMenu(_id).subscribe(
          res => {
            console.log(res)
            this.executeService()
          },
          err => {
            console.log(err)
          }
        )
        Swal.fire(
          'Platillo Eliminado',
          'El Platillo se eliminó satisfactoriamente',
          'success'
        )
      }
    })
  }

}
