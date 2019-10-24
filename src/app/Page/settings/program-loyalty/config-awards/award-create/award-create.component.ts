import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { RulePointService } from 'src/app/Service/RulePoint.service';
import { ToastrService } from 'ngx-toastr';
import { AwardsService } from 'src/app/Service/Awards.service';

@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css']
})
export class AwardCreateComponent implements OnInit {
  public form: FormGroup;
  public busy = false;
    constructor(
      @Inject(MAT_DIALOG_DATA) public data,
      public dialogRef: MatDialogRef<AwardCreateComponent>,
      private router: Router,
      private service: AwardsService,
      private fb: FormBuilder,
      private toastr: ToastrService
      ) { 
         this.form = this.fb.group({});
      }
  
    ngOnInit() {
    }
  
    submit() {
      this.busy = true;
      this
        .service
        .post(this.form.value)
        .subscribe(
          (data: any) => {
            this.busy = false;
            this.toastr.success(data.message, 'Adicionado com Sucesso');
           // this.router.navigate(['/']);
          },
          (err) => {
            console.log(err);
            this.busy = false;
          }
        );
    }
  
  }
  
  
  