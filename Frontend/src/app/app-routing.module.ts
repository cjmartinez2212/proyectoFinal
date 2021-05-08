import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

/* importación de componentes */
import { InicioComponent } from './components/inicio/inicio.component'
import { MenuComponent } from './components/menu/menu.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';
import { Page404Component } from './components/page404/page404.component'

/* definición de rutas a partir de objetos */
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'menu', component: MenuComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'nosotras', component: NosotrasComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
