import { RegraPrograma } from './../Models/RegraPrograma.models';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  Injectable } from "@angular/core";
import { Security } from '../Utils/Security-util';
import { Point } from '../Models/Points.models';


  //const Url = "http://localhost:3000/empresa";
  @Injectable({
    providedIn:'root'
  })
export class RulePointService{
  

  public url = "https://localhost:44311/";

    constructor( private http:HttpClient){
      }

      public composeHeaders() {
          const tokem = localStorage.getItem('tokenPontuaae');
          const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);
      
          return headeers;
      
        }

createRule(data:any){
  const id = parseInt(Security.getUser().id);
  data.IdUsuario = id;
  return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

}

ListProgramLoyalty() {
  return this.http.get<Point[]>(`${this.url}/Pontos`);
}
}
