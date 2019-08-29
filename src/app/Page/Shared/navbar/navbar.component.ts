import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { users } from 'src/app/Models/Users.model';
import { Security } from 'src/app/Utils/Security-util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public user: users;

  constructor(private router: Router) {

  }
  ngOnInit() {
    this.user = Security.getUser();
  }

  Logout(){
    Security.clear();
    this.router.navigate(['/login']);
  }

  LogoutCliente(){
    Security.clear();
    this.router.navigate(['/logincliente']);
  }

}
