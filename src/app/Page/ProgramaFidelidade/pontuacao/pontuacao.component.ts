import { Component, OnInit } from '@angular/core';
import { PointService } from '../../../Service/Point.service';
import { Premios } from 'src/app/Models/Premios.models';
@Component({
  selector: 'app-pontuacao',
  templateUrl: './pontuacao.component.html',
  styleUrls: ['./pontuacao.component.css']
})
export class PontuacaoComponent implements OnInit {
  premios: Premios[];


  constructor(private service: PointService) { }

  ngOnInit() {
    this.service.BuscarPremios().subscribe(datas => this.premios = datas);
  }

}
