import { AppModule } from './../app.module';
import { Injectable, Inject } from '@angular/core'
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
    providedIn:'root'
  })
export class AutenticacaoService{

     public url = 'https://localhost:44311/';

    constructor(private http : HttpClient){}

    public composeHeaders(){
        const token = localStorage.getItem('tokenPontuaae');
        const headeers = new HttpHeaders().set('atorização', 'token');
        return headeers;

    }

    Autenticar(data){
        return this.http.post(`${this.url}v1/login`, data); 
    }
    
    getCadastro(data){
        return this.http.post(`${this.url}v1/NewUsuario`,data);
    } 

    AtualizarToken(){
        return this.http.post(`${this.url}v1/atualizar-token`, 
            null,
            { headers: this.composeHeaders() }
        ); 

    }

    createUser(data){
        return this.http.post(`${this.url}v1/NovaEmpresa`,data);
    }
}
