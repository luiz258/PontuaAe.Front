import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output, Injectable } from '@angular/core';
import { AutenticacaoService } from 'src/app/Service/Autenticacao.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/Utils/Security-util';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/Service/Empresa.service';


@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.css'],
  providers: [AutenticacaoService]
})
export class CadastrarLoginComponent implements OnInit {

  public form: FormGroup;
  public carregando = false;
  public url = "https://localhost:44311/";

  public message: string;
  public selectedFile: File = null;
  @Output() public onUploadFinished = new EventEmitter();


  constructor(
    private fb: FormBuilder,
    private service: AutenticacaoService,
    private EmpService: DataService,
    private router: Router,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef,
    private http: HttpClient,

  ) {

    this.form = this.fb.group({
      Senha: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(20),
        Validators.required,
      ])],

      NomeFantasia: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,
      ])],

      Descricao: ['', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60),

      ])],
      NomeResponsavel: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(35),
        Validators.required,

      ])],
      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
      Telefone: ['', Validators.compose([
        Validators.required,

      ])],
      Documento: ['', Validators.compose([
        Validators.required,

      ])],
      Seguimento: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.required,

      ])],
      Horario: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(30),
        Validators.required,

      ])],
      Facebook: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      WebSite: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Instagram: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Delivery: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      Bairro: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(23),
        Validators.required,

      ])],
      Rua: ['', Validators.compose([

        Validators.maxLength(55),
        Validators.required,

      ])],
      Numero: ['', Validators.compose([
        Validators.maxLength(9),
        Validators.required,

      ])],
      Cep: ['', Validators.compose([
        Validators.required,

      ])],
      Cidade: ['', Validators.compose([
        Validators.required,

      ])],
      Estado: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(30),
        Validators.required,

      ])],

      Complemento: ['', Validators.compose([
        Validators.maxLength(30),
        Validators.required,

      ])],
      Logo: ['', Validators.length],
    }
    )
  }

  ngOnInit() {
  }

  GetToken() {
    Security.getToken();
  }

  submit() {
    this.carregando = true;
    this
      .service
      .createUser(this.form.value)
      .subscribe(
        (data: any) => {
          this.carregando = false;
          this.toastr.info(data.mensage);
          this.router.navigate(['/login']);

        },
        (err: any) => {
          this.carregando = false;
          this.toastr.warning(err.mensage);
          this.router.navigate(['/login']);

        }
      );
  }

  onUploadImagem(event: any) {
    this.selectedFile = <File>event.target.files[0];
    const formData = new FormData();
    formData.append('Logo', this.selectedFile.name)
    this.EmpService.uploadImagem(formData)
      .subscribe(
        (event) => {
          this.toastr.success("Salvo com sucesso");
        },
        (err) => {
          this.carregando = false;
          this.toastr.warning(err.dado, "Erro nos dados");

        });

  }

}
