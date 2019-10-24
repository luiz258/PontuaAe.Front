import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './list-programa/list-program.component';
import { PunctuationEditComponent } from './point-edit/point-edit.component';
import { PointDeleteComponent } from './punctuation-delete/point-delete.component';
import { PointCreateComponent } from './point-create/point-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
   ListProgramComponent,
   PunctuationEditComponent,
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
export class ConfigPunctuationModule { }
