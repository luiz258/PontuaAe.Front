import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  Injectable } from "@angular/core";
import { Security } from '../Utils/Security-util';
import { Point } from '../Models/Points.models';
import { RuleProgram } from '../Models/ruleProgram';


  @Injectable({providedIn:'root'})
  
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

getListProgramLoyalty(id: number) {
  return this.http.get<Point[]>(`${this.url}/Pontos/${id}`, { headers: this.composeHeaders() });
}

getByIdProgramLoyalty(idUser: number, idRule: number) {
  return this.http.get<Point[]>(`${this.url}/Pontos/${idUser}${idRule}`, { headers: this.composeHeaders() });
}




updateProgramLoyalty(data:any) {
  return this.http.put(`${this.url}/Pontos`, data, { headers: this.composeHeaders() });
}

}
