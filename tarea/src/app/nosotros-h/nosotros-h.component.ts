import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nosotros-h',
  templateUrl: './nosotros-h.component.html',
  styleUrls: ['./nosotros-h.component.css']
})
export class NosotrosHComponent  {

  @Input() nombre:string=''

}
