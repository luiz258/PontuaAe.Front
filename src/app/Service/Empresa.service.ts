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
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }
  CriarPerfil(data) {
    data.IdUsuario = parseInt(Security.getUser().id);
    console.log(data);
    return this.http.post(`${this.url}v1/PerfilEmpresa`, data);

  }

  GetPerfil(id: Number)  {
  
    
    return this.http.get<any[]>(`${this.url}v1/DetalheEmpresa/${id}`, { headers: this.composeHeaders() });
  }

  UpdatePerfil(data) {
    return this.http.put(`${this.url}v1/EditarEmpresa`, data, { headers: this.composeHeaders() });
  }

  uploadImagem(data: any): Observable<any> {
    return this.http.post(`${this.url}v1/empresa/imagem`, data);
  }
}