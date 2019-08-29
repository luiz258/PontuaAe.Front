import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Security } from '../Utils/Security-util';

@Injectable({
    providedIn:'root'
  })
export class PontuacaoService{

    public url = "https://localhost:44311/";

    constructor(
        private http:HttpClient
        ){
        }

        public composeHeaders() {
            const tokem = localStorage.getItem('tokenPontuaae');
            const headeers = new HttpHeaders().set('Authorization', `bearer ${tokem}`);
        
            return headeers;
        
          }

    Pontuar(data:any){
        const id = parseInt(Security.getUser().id);
        data.IdUsuario = id;
        return this.http.post(`${this.url}v1/Pontos`, data, { headers: this.composeHeaders() });

    }
    ResgatarPontos(data:any){
    
        return this.http.post(`${this.url}v1/ResgatarPontos`, data, { headers: this.composeHeaders() });

    }
}
