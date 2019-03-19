import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Page/navbar/navbar.component';
import { NavComponent } from './Page/nav/nav.component';
import { CardgroupComponent } from './Page/cardgroup/cardgroup.component';
import { PreCadatroComponent } from './Page/pre-cadatro/pre-cadatro.component';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    CardgroupComponent,
    PreCadatroComponent,
    
   
  ],
  imports: [
    BrowserModule,
    
    
  ], exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
