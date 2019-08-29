import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PontuacaoService } from 'src/app/Service/Pontuacao.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-resgatar',
  templateUrl: './regatar.component.html',
  styleUrls: ['./regatar.component.css']
})
export class RegatarComponent implements OnInit {
public form:FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: PontuacaoService,
    private router: Router, 
    private toastr: ToastrService,
  ) { 
    this.form =this.fb.group({
      Telefone: ['', Validators.compose([
        Validators.required        
      ])],
      CodPremio: ['', Validators.compose([
        Validators.required        
      ])],
      IdUsuario: ['',Validators.required],
    })
  }

  ngOnInit() {
  }

  Submit(){

    this.
    service
    .ResgatarPontos(this.form.value)
    .subscribe((data:any)=>{
    
    },(err)=>{
      console.log(err);
    }
  );
}
}
