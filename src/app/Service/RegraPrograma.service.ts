import { RegraPrograma } from './../Models/RegraPrograma.models';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  Injectable } from "@angular/core";
import { rootRenderNodes } from '@angular/core/src/view';

  //const Url = "http://localhost:3000/empresa";
@Injectable()

export class RegraProgramaService{

    constructor(private http:HttpClient){}

    GetPremios()  {
        return this.http.get<any[]>("http://localhost:3000/Premios");
       }
}
