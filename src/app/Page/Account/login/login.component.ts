import { users } from './../../../Models/Users.model';
import { Security } from '../../../Utils/Security-util';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../../../Service/Autenticacao.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators , FormControl} from '@angular/forms';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public form:FormGroup;
  public carregando= false;
  public customPatterns = {'0': { pattern: new RegExp('\[a-zA-Z\]')}};

  
  constructor(
    private router: Router,
    private service: AutenticacaoService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required
      ])],
      Senha:['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20), 
        Validators.required
      ])]
    });
   }

  ngOnInit() { 
    const token = localStorage.getItem('tokenPontuaae')
    
    if(token){

     console.log("altenticado")
    }
    else{
      localStorage.clear();
    }
  
   }

  submit(){
    this.carregando= true;
    this
      .service
      .Autenticar(this.form.value)
      .subscribe(
        (data: any) => {
          this.carregando = false;
          this.setUser( data.users, data.token);
          
        },
        (err) => {
          this.carregando =false;
          console.log(err);
          
        }
      );
  }

  setUser(user,token){
    Security.set(user, token);
    this.router.navigate(['/']);
  }
}
