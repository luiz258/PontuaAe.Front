import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ListProgramComponent } from './list-program/list-program.component';
import { PointCreateComponent } from './point-create/point-create.component';
import { PointDeleteComponent } from './point-delete/point-delete.component';


@NgModule({
  declarations: [
   ListProgramComponent,
   PointDeleteComponent,
   PointCreateComponent
   
   
  ],
  imports: [
    CommonModule,    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  
  ]
})
export class ConfigPointModule { }
