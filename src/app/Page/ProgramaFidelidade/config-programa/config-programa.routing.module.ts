import { PremiosComponent } from './premios/premios.component';
import { ConfigProgramaComponent } from './config-programa.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegraComponent } from './regra/regra.component';

const configRoutes = [
 
];

@NgModule({
  imports: [RouterModule.forChild(configRoutes)],
  exports: [RouterModule]
})
export class ConfigProgramaRoutingModule { }