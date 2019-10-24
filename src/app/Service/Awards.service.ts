import { Premios } from './../Models/Premios.models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../Utils/Security-util';


@Injectable()

export class AwardsService {

  public url = '';

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('petshop.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }



 
  post(data: any) {
    const id = parseInt(Security.getUser().id, data.id);
    data.IdUsuario = id;
    return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

}
}
