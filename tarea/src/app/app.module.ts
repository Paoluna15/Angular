import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeHComponent } from './home-h/home-h.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { NosotrosHComponent } from './nosotros-h/nosotros-h.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoHComponent } from './contacto-h/contacto-h.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeHComponent,
    NosotrosComponent,
    NosotrosHComponent,
    ContactoComponent,
    ContactoHComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
