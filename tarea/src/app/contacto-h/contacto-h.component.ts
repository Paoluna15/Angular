import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto-h',
  templateUrl: './contacto-h.component.html',
  styleUrls: ['./contacto-h.component.css']
})
export class ContactoHComponent  {

 nombre='Paola Luna González'
 servicios:Array<string>=["Contabilidad","Auditoria","Administración de Empresas"]
 mostrarimagen:boolean= true
 
 ocultarimagen(){
  this.mostrarimagen=!this.mostrarimagen
 }
}
