import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal-h',
  templateUrl: './principal-h.component.html',
  styleUrls: ['./principal-h.component.css']
})
export class PrincipalHComponent  {
  @Input() nombre:string=''

  constructor() { }

  ngOnInit(): void {
  }

}
