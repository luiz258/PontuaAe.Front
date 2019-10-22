import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AwardListComponent } from './config-awards/award-list/award-list.component';
import { AwardCreateComponent } from './config-awards/award-create/award-create.component';
import { AwardDeleteComponent } from './config-awards/award-delete/award-delete.component';
import { AwardEditComponent } from './config-awards/award-edit/award-edit.component';
import { PunctuationEditComponent } from './config-punctuation/punctuation-edit/punctuation-edit.component';
import { PunctuationCreateComponent } from './config-punctuation/punctuation-create/punctuation-create.component';
import { PunctuationDeleteComponent } from './config-punctuation/punctuation-delete/punctuation-delete.component';
import { ListProgramComponent } from './config-punctuation/list-programa/list-program.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AwardListComponent,
    AwardCreateComponent,
    AwardDeleteComponent,
    AwardEditComponent,
    PunctuationEditComponent,
    PunctuationCreateComponent,
    PunctuationDeleteComponent,
    ListProgramComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule
  ]
})
export class ProgramLoyaltyModule { }
