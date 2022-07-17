import { Component, OnInit, Input } from '@angular/core';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent {
@Input() imagenjuego:string= ''
@Input() nombrejuego:string=''
@Input() boton:string=''
  
  
}
