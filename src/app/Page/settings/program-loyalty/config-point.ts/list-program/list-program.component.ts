import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {  Point } from 'src/app/Models/Points.models';
import { PointCreateComponent } from '../point-create/point-create.component';
import { RulePointService } from 'src/app/Service/RulePoint.service';

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css'],
  providers:[RulePointService]
})
export class ListProgramComponent implements OnInit {
  public List$: Observable<Point[]> = null;

  public punctution: Point[] = [];
   constructor(private service:RulePointService,
    private dialog: MatDialog) { }
 

 openDialog(orderItemIndex){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { id:1};
  this.dialog.open(PointCreateComponent, dialogConfig)
  .afterClosed().subscribe(res => {});
 }


 ngOnInit() {
  //this.premio$ = this.service.GetPremios();
  this.List$ = this.service.ListProgramLoyalty();
  
}


}
 