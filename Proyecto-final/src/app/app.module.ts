import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { InformacionComponent } from './informacion/informacion.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { DetallesComponent } from './detalles/detalles.component';
import { SearchComponent } from './search/search.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TarjetaComponent,
    InformacionComponent,
    HomeComponent,
    DetallesComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
