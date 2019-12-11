import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { AwardCreateComponent } from '../award-create/award-create.component';
import { Award } from 'src/app/Models/Award.models';
import { AwardService } from 'src/app/Service/Award.service';
import { Security } from 'src/app/Utils/Security-util';

@Component({
  selector: 'app-award-list',
  templateUrl: './award-list.component.html',
  styleUrls: ['./award-list.component.css'],

})
export class AwardListComponent implements OnInit {
  public Award$: Observable<Award[]> = null;
   constructor(private service:AwardService, private dialog: MatDialog) { }
 
   ngOnInit() {

    const Id = parseInt(Security.getUser().id);
    this.Award$ = this.service.getListAward(Id);
    
  }

 openDialogCreate(){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "400px";
  dialogConfig.height = "400px";
  this.dialog.open(AwardCreateComponent, dialogConfig)
  .afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result)});
 }

 openDialogEdit(IdRule: number){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "30%";

  //const programLoyalty = this.service.getListProgramLoyalty(Id);

  dialogConfig.data = {IdRule};
  this.dialog.open(AwardCreateComponent, dialogConfig)
  .afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result)});

}

 
 }
 
