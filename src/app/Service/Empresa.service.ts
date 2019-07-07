import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../Models/Empresa.models';
import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }

  public data: Empresa[] = [];

  public url = "https://localhost:3000/";

  public composeHeaders() {
    const tokem = localStorage.getItem('token');
    const headeers = new HttpHeaders().set('atorização', 'token');

    return headeers;

  }
  CriarPerfil(data) {
    console.log(data);
    return this.http.post(`${this.url}v1/PerfilEmpresa`, data);
    
  }

  GetPerfil() {
    return this.http.get<any[]>(`${this.url}v1/Premios`,  { headers: this.composeHeaders() });
  }

  UpdatePerfil(){
    return this.http.put(`${this.url}v1/EditarEmpresa`, { headers: this.composeHeaders() } );
  }




}

