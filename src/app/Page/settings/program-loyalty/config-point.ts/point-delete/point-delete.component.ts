import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RulePointService } from 'src/app/Service/RulePoint.service';

@Component({
  selector: 'app-point-delete',
  templateUrl: './point-delete.component.html',
  styleUrls: ['./point-delete.component.css']
})
export class PointDeleteComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public dialogRef: MatDialogRef<PointDeleteComponent>,
    private service: RulePointService,
  ) { }

  ngOnInit() {
  }

 
 


}
