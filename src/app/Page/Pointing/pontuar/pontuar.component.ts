import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PointService } from 'src/app/Service/Point.service';
import { Security } from 'src/app/Utils/Security-util';

@Component({
  selector: 'app-pontuar',
  templateUrl: './pontuar.component.html',
  styleUrls: ['./pontuar.component.css'],
  providers: [PointService]
})
export class PontuarComponent implements OnInit {
  public form: FormGroup;

  constructor(
   private fb: FormBuilder,
    private service: PointService,
    private router: Router, 
    private toastr: ToastrService,
  ) {

    this.form =this.fb.group({
      Telefone: ['', Validators.compose([
        Validators.required
        
      ])],
      ValorInfor:['', Validators.compose([
        Validators.required
      ])],
      IdUsuario:[''],
    })
   }

  ngOnInit() {
  }

  Submit(){

    this
    .service
    .Pontuar(this.form.value)
    .subscribe((data: any) => {
      
    },
    (err)=>{
      console.log(err)
    }
    );
    
  }

}
