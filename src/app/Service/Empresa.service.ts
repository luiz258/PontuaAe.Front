import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../Models/Empresa.models';
import { catchError, tap, map } from 'rxjs/operators';
import { elementEnd } from '@angular/core/src/render3';
import { Security } from '../Utils/Security-util';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }



  public url = "https://localhost:44311/";

  public composeHeaders() {
    const tokem = localStorage.getItem('token');
    const headeers = new HttpHeaders().set('atorização', 'token');

    return headeers;

  }
  CriarPerfil(data) {
     data.IdUsuario = 1;//parseInt(Security.getUser().id);
  // const elements = JSON.stringify(data);
  /// console.log(elements);
  console.log(data);
  return this.http.post(`${this.url}v1/PerfilEmpresa`, data);

  }

  GetPerfil() {
    return this.http.get<any[]>(`${this.url}v1/Premios`,  { headers: this.composeHeaders() });
  }

  UpdatePerfil(){
    return this.http.put(`${this.url}v1/EditarEmpresa`, { headers: this.composeHeaders() } );
  }

  uploadImagem(data: any): Observable<any>{
    return this.http.post(`${this.url}v1/empresa/imagem`, data);
  }


}

