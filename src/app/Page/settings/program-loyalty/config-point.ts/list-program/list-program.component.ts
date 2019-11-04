import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  Point } from 'src/app/Models/Points.models';
import { RulePointService } from 'src/app/Service/RulePoint.service';
import { PointCreateComponent } from '../point-create/point-create.component';
import { Security } from 'src/app/Utils/Security-util';
import { RuleProgram } from 'src/app/Models/ruleProgram';

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css'],

})
export class ListProgramComponent implements OnInit {
  public List$: Observable<RuleProgram[]> = null;

   constructor(private service:RulePointService,
    private dialog: MatDialog) { }
 
    ngOnInit() {
      const Id = parseInt(Security.getUser().id);
      this.List$ = this.service.getListProgramLoyalty(Id);
    }


 openDialogCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "400px";
  dialogConfig.height = "400px";
  //dialogConfig.data = { orderItemIndex, OrderID};
  this.dialog.open(PointCreateComponent, dialogConfig)
  .afterClosed();
 }

  openDialogEdit(IdRule: number){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "30%";

  //const programLoyalty = this.service.getListProgramLoyalty(Id);

  dialogConfig.data = {IdRule};
  this.dialog.open(PointCreateComponent, dialogConfig)
  .afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result)});

} 

}



 