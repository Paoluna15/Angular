import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { HomeComponent } from './home/home.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [{path:"home",component:HomeComponent},
{path:"nosotros",component:NosotrosComponent},
{path:"contacto",component:ContactoComponent},
{path:"cotizacion",component:CotizacionComponent},
{path:"",component:HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
