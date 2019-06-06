import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/Service/Autenticacao.service';
import { FormGroup, FormBuilder, Validators , FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cadastrar-login',
  templateUrl: './cadastrar-login.component.html',
  styleUrls: ['./cadastrar-login.component.css'],
  providers:[AutenticacaoService]
})
export class CadastrarLoginComponent implements OnInit {

public form:FormGroup;
public carregando= false;


  constructor(
    private fb:FormBuilder,
    private service:AutenticacaoService,
    private router: Router,
    private toastr: ToastrService

  ) {
    this.form = this.fb.group({
      Email: ['', Validators.compose([
        Validators.required
      ])],
      Senha:['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(20), 
        Validators.required,
        
      ])]
   }
    )}
   
  //checarSenha(group: FormGroup) { // here we have the 'passwords' group
  //let senha = group.controls.password.value;
  //let validarSenha = group.controls.confirmPass.value;

  //return senha === validarSenha ? null : { notSame: true }     
//}

ngOnInit() {
}

submit() {
  this.carregando = true;
  this
    .service
    .createUser(this.form.value)
    .subscribe(
      (data: any) => {
          this.carregando = false;
          this.toastr.info(data.mensage, 'Bem-vindo!');
          this.router.navigate(['/login']);
      
      },
      (err) => {
        console.log(err);
        this.toastr.warning(err.mensage, 'Bem-vindo!');
        this.carregando = false;
      }
    );
}

}
