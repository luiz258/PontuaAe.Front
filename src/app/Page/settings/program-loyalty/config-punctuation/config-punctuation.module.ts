import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgramComponent } from './list-programa/list-program.component';
import { PunctuationEditComponent } from './punctuation-edit/punctuation-edit.component';
import { PunctuationDeleteComponent } from './punctuation-delete/punctuation-delete.component';
import { PunctuationCreateComponent } from './punctuation-create/punctuation-create.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
   ListProgramComponent,
   PunctuationEditComponent,
   PunctuationDeleteComponent,
   PunctuationCreateComponent,
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
