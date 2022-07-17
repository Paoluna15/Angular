import { Component, OnInit } from '@angular/core';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  informacionRecibida: any= ""

  constructor(private Servicio:PrincipalService) { 
    Servicio.getInformacionjuegos().subscribe((data)=>{
      this.informacionRecibida=data
    })
  }

  ngOnInit(): void {
  }

}
