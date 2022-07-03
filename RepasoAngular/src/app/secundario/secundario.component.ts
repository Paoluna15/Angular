import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent {
  informacionRecibida:string=''

recibirNombre(nombre:string) {
this.informacionRecibida=nombre
}

  constructor() { }

  ngOnInit(): void {
  }

}
