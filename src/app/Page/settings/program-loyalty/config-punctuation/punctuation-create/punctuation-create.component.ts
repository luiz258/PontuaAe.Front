import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { RegraProgramaService } from 'src/app/Service/RegraPrograma.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-punctuation-create',
  templateUrl: './punctuation-create.component.html',
  styleUrls: ['./punctuation-create.component.css']
})
export class PunctuationCreateComponent implements OnInit {
public form: FormGroup;
public busy = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PunctuationCreateComponent>,
    private router: Router,
    private service: RegraProgramaService,
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


