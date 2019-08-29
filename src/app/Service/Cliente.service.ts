import { RegraPrograma } from './../Models/RegraPrograma.models';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  Injectable } from "@angular/core";


@Injectable({
  providedIn:'root'
})
export class ClienteService{
  public url = "https://localhost:44311/";
    constructor(private http:HttpClient){}

    GetPremios()  {
        return this.http.get<any[]>(this.url);
       }

 //   cadastrarCliente(data: any){
  //    return this.http.post(`${this.url}v1/Cliente`, data)
//    }

    cadastrarCliente(data: any) {
      console.log(data);
      return this.http.post(`${this.url}v1/NovoCliente`, data);
    }
}
