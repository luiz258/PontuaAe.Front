import { User } from '../../../Models/User.model';
import { Security } from '../../../Utils/Security-util';
import { Router } from '@angular/router';
import { AutenticacaoService } from './../../../Service/Autenticacao.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NavComponent } from '../../../Page/Shared/nav/nav.component';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public customPatterns = { 0: { pattern: new RegExp('\[a-zA-Z\]') } };

  @Output() buttonClick = new EventEmitter();
  enable = false;
  constructor(
    private router: Router,
    private service: AutenticacaoService,
    private fb: FormBuilder,

    private toastr: ToastrService,
  ) {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required
      ])],
      Senha: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required
      ])]
    });
  }

  displayBanner() {
    // tslint:disable-next-line: triple-equals
    this.enable = this.enable == false ? true : false;
    this.buttonClick.emit(this.enable);
  }


  ngOnInit() {
    const token = localStorage.getItem('tokenPontuaae');

    if (token) {

      console.log('altenticado');
    } else {
      localStorage.clear();
    }

  }

  submit() {
    this.carregando = true;
    this
      .service
      .Autenticar(this.form.value)
      .subscribe(
        (data: any) => {
          this.carregando = false;
          this.setUser(data.users, data.token);
          this.toastr.success(data.mensage);
        },
        (err) => {
          this.carregando = false;
          console.log(err);
          this.toastr.warning(err.data, 'erro ao logar');
        }
      );
  }

  setUser(user, token) {
    Security.set(user, token);
    this.router.navigate(['/']);
  }

  setCadatrarPerfil(validade) {

    this.router.navigate(['/addPerfil']);
  }
}
