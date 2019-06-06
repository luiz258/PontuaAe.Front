import { HttpClient } from '@angular/common/http';
import { DataService } from './../../../../Service/Empresa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regra',
  templateUrl: './regra.component.html'
})
export class RegraComponent implements OnInit {
  itensJson: any[];
  constructor(private dt: DataService, public http: HttpClient ) { }

  ngOnInit() {
   

 } 
}
