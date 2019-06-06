import { PremiosService } from './../../../../Service/Premios.service';
import { Premios } from './../../../../Models/Premios.models';
import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  providers:[PremiosService]
})
export class PremiosComponent implements OnInit {
  public premio$: Observable<any[]>;
 
 public permios: Premios[] = [];
  constructor(public service:PremiosService) { }

  ngOnInit() {
    this.premio$ = this.service.GetPremios();
}

}
