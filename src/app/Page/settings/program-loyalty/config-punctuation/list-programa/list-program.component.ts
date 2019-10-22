import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RegraProgramaService } from 'src/app/Service/RegraPrograma.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Punctuation } from 'src/app/Models/Punctuation';
import { PunctuationCreateComponent } from '../punctuation-create/punctuation-create.component';

@Component({
  selector: 'app-list-program',
  templateUrl: './list-program.component.html',
  styleUrls: ['./list-program.component.css'],
  providers:[RegraProgramaService]
})
export class ListProgramComponent implements OnInit {
  public List$: Observable<Punctuation[]>;

  public punctution: Punctuation[] = [];
   constructor(public service:RegraProgramaService,
    private dialog: MatDialog) { }
 
   ngOnInit() {
     //this.premio$ = this.service.GetPremios();
 }
 openDialog(orderItemIndex, ){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.autoFocus = true;
  dialogConfig.disableClose = true;
  dialogConfig.width = "50%";
  dialogConfig.data = { orderItemIndex};
  this.dialog.open(PunctuationCreateComponent, dialogConfig).afterClosed().subscribe(result => {
    console.log("Dialog was closed")
    console.log(result)
    });
 }
 }
 