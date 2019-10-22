import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Premios } from 'src/app/Models/Premios.models';
import { PremiosService } from 'src/app/Service/Premios.service';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],
  providers:[PremiosService]
})
export class AwardListComponent implements OnInit {
  public premio$: Observable<Premios[]>;

  public permios: Premios[] = [];
   constructor(public service:PremiosService) { }
 
   ngOnInit() {
     //this.premio$ = this.service.GetPremios();
 }
 
 }
 
