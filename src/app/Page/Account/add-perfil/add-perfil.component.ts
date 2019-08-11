import { DataService } from './../../../Service/Empresa.service';
import { Empresa } from './../../../Models/Empresa.models';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/Service/Autenticacao.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, RequiredValidator } from '@angular/forms';
import { Component, OnInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Security } from 'src/app/Utils/Security-util';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.css']
})
export class AddPerfilComponent implements OnInit {
  public form: FormGroup;
  public carregando = false;
  public url = "https://localhost:44311/";
  public empresa: Empresa;

  public message: string;
  public selectedFile: File = null;
  @Output() public onUploadFinished = new EventEmitter();

 
  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router,
    private toastr: ToastrService,
    private cd: ChangeDetectorRef,
    private http: HttpClient,


  ) {

    this.form = this.fb.group({


      IdUsuario: ['', Validators.compose([
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
        Validators.maxLength(30),


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
        Validators.maxLength(14),
        Validators.minLength(13),
        Validators.required,

      ])],
      Documento: ['', Validators.compose([
        Validators.maxLength(18),
        Validators.minLength(18),
        Validators.required,

      ])],
      Seguimento: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(30),
        Validators.required,

      ])],
      Horario: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
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
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,

      ])],
      Numero: ['', Validators.compose([
        Validators.minLength(1),
        Validators.maxLength(9),
        Validators.required,

      ])],
      Cep: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.required,

      ])],
      Cidade: ['', Validators.compose([
        Validators.required,

      ])],
      Estado: ['', Validators.compose([
        Validators.minLength(2),
        Validators.maxLength(20),
        Validators.required,

      ])],

      Complemento: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(20),
        Validators.required,

      ])],
      event: ['', Validators.nullValidator],
    }
    )
  }

  ngOnInit() {
  }

  submit() {
    this.carregando = true;

    this
      .service
      .CriarPerfil(this.form.value)
      .subscribe(
        (data: any) => {

          this.carregando = false;
          this.toastr.success(data.data.mensage);
          this.router.navigate(['/login']);

        },
        (err) => {
          console.log(err);
          this.toastr.warning(err.data.mensage, "Erro nos dados");
          this.carregando = false;
        }
      );
  }

  onUploadImagem(event) {
    this.selectedFile = <File>event.target.files[0];
    const formData = new FormData();
    formData.append('image', this.selectedFile);
    this.service.uploadImagem(formData)

      .subscribe(
        (event) => {
          this.toastr.success("Salvo com sucesso");
          let a =this.form.setValue(event, this.form.value.Logo )
          console.log(a);
       
         
        },
        (err) => {
          console.log(err);
          this.toastr.warning("Erro nos dados", err.data.mensage);
          this.carregando = false;


        });

  }




  GetToken() {
    Security.getToken();
  }
}