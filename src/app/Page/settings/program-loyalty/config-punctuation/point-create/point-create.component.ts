import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RulePointService } from 'src/app/Service/RulePoint.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']
})
export class PointCreateComponent implements OnInit {
public form: FormGroup;
public busy = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PointCreateComponent>,
    private router: Router,
    private service: RulePointService,
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


