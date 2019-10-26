import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../Models/Company.models';
import { catchError, tap, map } from 'rxjs/operators';
import { Security } from '../Utils/Security-util';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor(private http: HttpClient) { }



  public url = 'https://localhost:44311/';
  public URL_IMG = 'https://api.cloudinary.com/v1_1/pontuaae';


  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  }
  CriarPerfil(data) {
    data.IdUsuario = parseInt(Security.getUser().id, data.IdUsuario);
    console.log(data);
    return this.http.post(`${this.url}v1/PerfilEmpresa`, data);

  }

  GetPerfil(id: number) {
    return this.http.get<any[]>(`${this.url}v1/DetalheEmpresa/${id}`, { headers: this.composeHeaders() });
  }

  UpdatePerfil(data) {
    return this.http.put(`${this.url}v1/EditarEmpresa`, data, { headers: this.composeHeaders() });
  }

  uploadImagem(data: any): Observable<any> {
    return this.http.post(`${this.url}v1/empresa/imagem`, data);
  }

  listarEmpresas() {
    return this.http.get<Empresa[]>(`${this.url}v1/ListarEmpresas`)
      .pipe(
        tap(console.log)
      );
  }
}
