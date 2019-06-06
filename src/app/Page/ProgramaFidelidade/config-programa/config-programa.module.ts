import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CommonModule} from '@angular/common';
import { RegraComponent } from './regra/regra.component';
import { PremiosComponent } from './premios/premios.component';
import { ConfigProgramaRoutingModule } from './config-programa.routing.module';
import { ConfigProgramaComponent } from './config-programa.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [ConfigProgramaRoutingModule, BrowserModule, CommonModule],
  declarations: [ RegraComponent, PremiosComponent]
})
export class ConfigProgramaModule{}