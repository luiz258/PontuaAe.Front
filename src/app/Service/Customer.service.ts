import { RegraPrograma } from '../Models/RegraPrograma.models';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Security } from '../Utils/Security-util';
import { Empresa } from '../Models/Empresa.models';
import { tap } from 'rxjs/operators';
import { ListaEmpresaSaldo } from '../Models/ListarEmpresaSaldo';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public url = 'https://localhost:44311/';
  public id: number;
  constructor(private http: HttpClient) { }

  GetPremios() {
    return this.http.get<any[]>(this.url);
  }

  //   cadastrarCliente(data: any){
  //    return this.http.post(`${this.url}v1/Cliente`, data)
  //    }

  cadastrarCliente(data: any) {
    console.log(data);
    return this.http.post(`${this.url}v1/NovoCliente`, data);
  }

  ListarProgramasFidelidadeCadastrados() {

    const b = parseInt(Security.getUser().id, this.id);
    const a = this.http.get<ListaEmpresaSaldo[]>(`${this.url}v1/SaldosCliente/${b}`).pipe(
      tap(console.log)
    );
    console.log(b);
    console.log(a);
    return a;


  }
}
