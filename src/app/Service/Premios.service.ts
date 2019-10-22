import { Premios } from './../Models/Premios.models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()

export class PremiosService {

  public url = '';

  constructor(private http: HttpClient) { }

  public composeHeaders() {
    const token = localStorage.getItem('petshop.token');
    const headers = new HttpHeaders().set('Authorization', `bearer ${token}`);
    return headers;
  }



  updatePro(data) {
    return this.http.put(`${this.url}/v1/Config/edit`, data, { headers: this.composeHeaders() });
  }

}
