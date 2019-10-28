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
    this.busy = true;
    this
      .service
      .getProfile()
      .subscribe(
        (data: any) => {
          this.busy = false;
          // tslint:disable-next-line: no-string-literal
          this.form.controls['Nome'].setValue(data.name);
          // tslint:disable-next-line: no-string-literal
          this.form.controls['documento'].setValue(data.document);
          // tslint:disable-next-line: no-string-literal
          this.form.controls['email'].setValue(data.email);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }


  submit() {
    this.busy = true;
    this
      .service
      .createRule(this.form.value)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.toastr.success(data.message, 'Adicionado com Sucesso');
          this.dialogRef.close();

        },
        (err) => {
          console.log(err);
          this.busy = false;
          this.dialogRef.close();
        }
      );
  }

}

