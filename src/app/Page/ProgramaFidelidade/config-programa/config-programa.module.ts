import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegraComponent } from './regra/regra.component';
import { PremiosComponent } from './premios/premios.component';
import { ConfigProgramaRoutingModule } from './config-programa.routing.module';
import { ConfigProgramaComponent } from './config-programa.component';

@NgModule({
  imports: [ConfigProgramaRoutingModule],
  declarations: [ RegraComponent, PremiosComponent]
})
export class ConfigProgramaModule{}