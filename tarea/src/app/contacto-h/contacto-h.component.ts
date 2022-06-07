import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-h',
  templateUrl: './contacto-h.component.html',
  styleUrls: ['./contacto-h.component.css']
})
export class ContactoHComponent  {

 nombre='Paola Luna'
 imagen:string= ""
 
 mostrarimagen(){
  this.imagen="mostar"
 }
ocultarimagen(){
  this.imagen="ocultar"
}
}
