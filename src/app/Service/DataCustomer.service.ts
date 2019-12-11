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

export class DataCustomerService {
  constructor(private http: HttpClient) { }



  public url = 'https://localhost:44311/';
  public URL_IMG = 'https://api.cloudinary.com/v1_1/pontuaae';


  public composeHeaders() {
    const tokem = localStorage.getItem('tokenPontuaae');
    const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

    return headeers;

  } 

  GetListCustomer(id: number) {
    return this.http.get<any[]>(`${this.url}v1/ListaClientes/${id}`, { headers: this.composeHeaders() });
  } 

  GetByIdCustomer(id: number) {
    return this.http.get<any[]>(`${this.url}v1/Cliente/${id}`, { headers: this.composeHeaders() });
  }

  GetHistoric(id: number) {
    return this.http.get<any[]>(`${this.url}v1/ClientHistory/${id}`, { headers: this.composeHeaders() });
  }

  //Implementar Filtros
  
}
