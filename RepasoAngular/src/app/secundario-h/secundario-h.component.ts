import { Component, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-secundario-h',
  templateUrl: './secundario-h.component.html',
  styleUrls: ['./secundario-h.component.css']
})
export class SecundarioHComponent  {
  nombre:string='Manuel'
  @Output() nuevocanal = new EventEmitter<string>()

  enviarinformacion(){
    this.nuevocanal.emit(this.nombre)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
