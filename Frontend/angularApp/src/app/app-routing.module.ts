import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* importación de componentes */
import { InicioComponent } from './components/inicio/inicio.component'
import { Page404Component } from './components/page404/page404.component'

/* definición de rutas a partir de objetos */
const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
