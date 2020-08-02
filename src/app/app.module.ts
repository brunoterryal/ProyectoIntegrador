import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { CompraComponent } from './compra/compra.component';
import { ContactoComponent } from './contacto/contacto.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PiePaginaComponent } from './pie-pagina/pie-pagina.component';
import { Menu2Component } from './menu2/menu2.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    CompraComponent,
    ContactoComponent,
    IndexComponent,
    LoginComponent,
    PiePaginaComponent,
    Menu2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
