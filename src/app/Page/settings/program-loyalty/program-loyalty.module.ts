import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardListComponent } from './config-awards/award-list/award-list.component';
import { AwardCreateComponent } from './config-awards/award-create/award-create.component';
import { AwardDeleteComponent } from './config-awards/award-delete/award-delete.component';
import { AwardEditComponent } from './config-awards/award-edit/award-edit.component';
import { PointCreateComponent } from './config-point.ts/point-create/point-create.component';
import { ListProgramComponent } from './config-point.ts/list-program/list-program.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { PointDeleteComponent } from './config-point.ts/point-delete/point-delete.component';



@NgModule({
  declarations: [
    AwardListComponent,
    AwardCreateComponent,
    AwardDeleteComponent,
    AwardEditComponent,
    PointCreateComponent,
    PointDeleteComponent,
    ListProgramComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class ProgramLoyaltyModule { }
