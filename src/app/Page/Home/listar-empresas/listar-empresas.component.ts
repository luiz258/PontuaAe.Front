import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/Empresa.service';
import { Empresa } from 'src/app/Models/Empresa.models';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-listar-empresas',
  templateUrl: './listar-empresas.component.html',
  styleUrls: ['./listar-empresas.component.css']
})
export class ListarEmpresasComponent implements OnInit {
   empresas: Empresa[] ;

  constructor(private service: DataService) { }

  ngOnInit() { 
    this.service.listarEmpresas().subscribe(datas => this.empresas = datas);
  }

}
