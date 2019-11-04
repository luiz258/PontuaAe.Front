import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { RulePointService } from 'src/app/Service/RulePoint.service';
import { ToastrService } from 'ngx-toastr';
import { AwardService } from 'src/app/Service/Award.service';
import { Security } from 'src/app/Utils/Security-util';


@Component({
  selector: 'app-award-create',
  templateUrl: './award-create.component.html',
  styleUrls: ['./award-create.component.css'],

})

export class AwardCreateComponent implements OnInit {
  public form: FormGroup;
  public busy = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public metadata,
    public dialogRef: MatDialogRef<AwardCreateComponent>,
    private router: Router,
    private service: AwardService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.form = this.fb.group({

      Nome: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(80),
        Validators.required
      ])],

      Descricao: ['', [Validators.required]],      
      PontosNecessario: ['', [Validators.required]],

    });
  }
  ngOnInit() {

  const IdUser = parseInt(Security.getUser().id);


    this.busy = true;
    this
      .service
      .getByIdAward(this.metadata.IdRule, IdUser)
      .subscribe(
        (data: any) => {
          this.busy = false;
          this.form.controls['Id'].setValue(data.Id);
          this.form.controls['Nome'].setValue(data.Nome);
          this.form.controls['Descricao'].setValue(data.Descricao);
          this.form.controls['PontosNecessario'].setValue(data.PontosNecessario);
        },
        (err) => {
          console.log(err);
          this.busy = false;
        }
      );
  }


  submit() {
    if (isNaN(this.metadata.Id)) {
      this.service
        .createAward(this.form.value)
        .subscribe((data: any) => {
          this.busy = false;
          this.toastr.success("Salvo com sucesso");
          this.dialogRef.close(); this.toastr.success(data.message, 'Salvo com Sucesso');
          this.dialogRef.close();
        },

          (err) => {
            console.log(err);
            this.busy = false;
            this.dialogRef.close();
          }
        );
    } else {
      this.busy = true;
      this
        .service
        .updateAward(this.form.value)
        .subscribe((data: any) => {
          this.busy = false;
          this.CloseDialog();
          this.toastr.success(data.message, 'Salvo com sucesso');

          //this.router.navigate(['/']);
        }, (err) => {
          this.busy = false;
          console.log(err)
          this.toastr.warning(err.data);
        }
        );
    }
  }

  CloseDialog(): void {
    this.dialogRef.close();
  }


}
