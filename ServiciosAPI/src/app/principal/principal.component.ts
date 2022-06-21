import { Component, OnInit } from '@angular/core';
import { ServicioPrincipalService } from '../servicio-principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  constructor(private variableServicio:ServicioPrincipalService) { 
    variableServicio.ObtenerchisteRandom().subscribe((data)=>{
      this.informacionRecibida=data
    })
  }


  ngOnInit(): void {
  }

}
