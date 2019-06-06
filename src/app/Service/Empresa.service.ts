import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import {  Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../Models/Empresa.models';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  //const Url = "http://localhost:3000/empresa";
@Injectable({
    providedIn: 'root'
})

export class DataService{
    constructor(private http: HttpClient ){}
    public data: any [] =[];

    GetPremios(data)  {
       return this.http.get<any []>("http://localhost:3000/Premios");
      }
  
}

