import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/Models/Customer.model';
import { Security } from 'src/app/Utils/Security-util';
import { DataCustomerService } from 'src/app/Service/DataCustomer.service';

@Component({
  selector: 'app-list-client-page',
  templateUrl: './list-client-page.component.html',
  styleUrls: ['./list-client-page.component.css']
})
export class ListClientPageComponent implements OnInit {
  ListClient$ : Observable<Customer> = null;
  constructor(private service: DataCustomerService) { }

  ngOnInit() {
    const Id = parseInt(Security.getUser().id);
    //this.ListClient$ = this.service.GetListCustomer(Id);
  }
}
