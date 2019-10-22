import { Component, OnInit } from '@angular/core';
import { PontuacaoService } from '../../../Service/Pontuacao.service';
import { Premios } from 'src/app/Models/Premios.models';
@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css']
})
export class PontuacaoComponent implements OnInit {
  premios: Premios[];


  constructor(private service: PontuacaoService) { }

  ngOnInit() {
    this.service.BuscarPremios().subscribe(datas => this.premios = datas);
  }

}
