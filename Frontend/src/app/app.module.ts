import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { Page404Component } from './components/page404/page404.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
//liliana 
import { Menu3Component } from './components/menu3/menu3.component';
import { Menu2Component } from './components/menu2/menu2.component';
import { Menu4Component } from './components/menu4/menu4.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminFormMenuComponent } from './components/admin-form-menu/admin-form-menu.component';
import { NosotrasComponent } from './components/nosotras/nosotras.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    Page404Component,
    NavbarComponent,
    CarouselComponent,
    FooterComponent,
    MenuComponent,
    Menu2Component,
    Menu3Component,
    Menu4Component,
    ReservasComponent,
    AdminComponent,
    AdminFormMenuComponent,
    NosotrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
