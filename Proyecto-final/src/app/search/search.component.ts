import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valordellink:string=""
  informacioApiBuscada:any=""

  constructor(private route:ActivatedRoute, private servicio:PrincipalService) {
    this.route.params.subscribe((data:any)=>{
      this.valordellink=data.id
      this.servicio.getInformacionBusqueda(this.valordellink).subscribe((info:any)=>(
       this.informacioApiBuscada=info
      ))

       } )
   }

  ngOnInit(): void {
  }

}
