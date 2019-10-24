import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/Models/Empresa.models';
import { Observable } from 'rxjs';
import { CustomerService } from 'src/app/Service/Customer.service';
import { ListaEmpresaSaldo } from 'src/app/Models/ListarEmpresaSaldo';


@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListCompanyComponent implements OnInit {
  ListaSaldos: ListaEmpresaSaldo[];
  public URL_IMG = 'https://localhost:44311';

  constructor(private service: CustomerService) { }

  ngOnInit() {
    this.service.ListarProgramasFidelidadeCadastrados().subscribe(datas => this.ListaSaldos = datas);

  }




}


