import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { SecundarioComponent } from './secundario/secundario.component';
import { PrincipalHComponent } from './principal-h/principal-h.component';
import { SecundarioHComponent } from './secundario-h/secundario-h.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    SecundarioComponent,
    PrincipalHComponent,
    SecundarioHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
