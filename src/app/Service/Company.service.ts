import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Empresa } from '../Models/Company.models';
import { catchError, tap, map } from 'rxjs/operators';
import { Security } from '../Utils/Security-util';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })

export class DataService {
    constructor(private http: HttpClient) { }

    public url = 'https://localhost:44311/';


    public composeHeaders() {
        const tokem = localStorage.getItem('tokenPontuaae');
        const headers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);

        return headers;

    }

    
}
