import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PrincipalService } from '../principal.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  valordelLink:string=""
  inforecibida:any=""
  constructor(private ruta:ActivatedRoute, private servicio:PrincipalService) {
    this.ruta.params.subscribe((data:any)=>{
      this.valordelLink=data.id
      this.servicio.getInformaciondetalles(this.valordelLink).subscribe((info:any)=>{
        this.inforecibida=info
      })
    })
   }

  ngOnInit(): void {
  }

}
