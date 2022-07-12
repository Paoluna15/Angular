import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  nombreRecibido:string=""
  constructor(private variableServicio:PrincipalService) { 
    this.nombreRecibido=variableServicio.nombre
  }
   

  ngOnInit(): void {
  }

}
