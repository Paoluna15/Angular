import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrincipalService {

  constructor(private http:HttpClient) { }

  ObtenerchisteRandom(){
    return this.http.get("https://api.chucknorris.io/jokes/random")
  }
}
