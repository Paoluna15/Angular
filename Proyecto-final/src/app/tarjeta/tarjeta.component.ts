import { Component, OnInit, Input } from '@angular/core';
import { PrincipalService } from '../principal.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
@Input() imagenjuego:string= ''
@Input() nombrejuego:string=''
@Input() boton:string=''
@Input() idjuego:string=''
  
constructor(private router:Router){

}
detalles(){
  this.router.navigate(["detalles",this.idjuego])
}
  
}
