import { DataService } from './../../../Service/Empresa.service';
import { Empresa } from './../../../Models/Empresa.models';
import { Router } from '@angular/router';
import { AutenticacaoService } from 'src/app/Service/Autenticacao.service';
import { FormGroup, FormBuilder, Validators, FormControl, FormGroupDirective, NgForm, RequiredValidator } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-perfil',
  templateUrl: './add-perfil.component.html',
  styleUrls: ['./add-perfil.component.css']
})
export class AddPerfilComponent implements OnInit {
  public form: FormGroup;
  public carregando= false;
  
  constructor(
    private fb: FormBuilder,
    private service: DataService,
    private router: Router,
    private toastr: ToastrService

  ) {
    this.form = this.fb.group({
      NomeFantasia: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,

      ])],
     
      Descricao: ['', Validators.compose([
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.required,

      ])],
      NomeResponsavel: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,

      ])],
      Email: ['', Validators.compose([
        Validators.minLength(4),
        Validators.required
      ])],
      Telefone: ['', Validators.compose([
        Validators.maxLength(14),
        Validators.required,

      ])],
      Documento: ['', Validators.compose([
        Validators.maxLength(18),
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
      Instagram: ['', Validators.compose([
        Validators.maxLength(60),
        Validators.required,

      ])],
      WebSite: ['', Validators.compose([
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
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.required,

      ])],
      Cep: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.required,

      ])],
      Cidade: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(25),
        Validators.required,

      ])],
      Estado: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.required,

      ])],
      Complemento: ['', Validators.compose([
        Validators.minLength(9),
        Validators.maxLength(9),
        Validators.required,

      ])],
      Logo: ['', Validators.compose([
        Validators.required,

      ])],
      
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
            this.toastr.success(data.mensage);
            this.router.navigate(['/login']);
        
        },
        (err) => {
          console.log(err);
          this.toastr.warning(err.mensage,"Erro nos dados");
          this.carregando = false;
        }
      );
  }

  onSelectedFile(event) {
    if (event.target.files.length) {
      const file = event.target.files[0];
      this.form.get('Logo').setValue(file);
      console.log(file);
    }
  }

}
