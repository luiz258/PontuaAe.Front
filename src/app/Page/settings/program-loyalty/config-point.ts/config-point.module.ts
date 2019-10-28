import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './list-program/list-program.component';
import { PointEditComponent } from './point-edit/point-edit.component';
import { PointDeleteComponent } from './point-delete/point-delete.component';
import { PointCreateComponent } from './point-create/point-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    ListProgramComponent,
    PointEditComponent,
    PointDeleteComponent,
    PointCreateComponent,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class ConfigPointModule { }
