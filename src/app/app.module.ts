import { HttpClientModule} from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { PontuacaoComponent } from './Page/ProgramaFidelidade/pontuacao/pontuacao.component';
import { PerfilComponent } from './Page/ProgramaFidelidade/perfil/perfil.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { ConfigProgramaModule } from './Page/ProgramaFidelidade/config-programa/config-programa.module';
import { ConfigProgramaComponent } from './Page/ProgramaFidelidade/config-programa/config-programa.component';
import { PreCadatroComponent } from './Page/ProgramaFidelidade/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { NavComponent } from './Page/Shared/nav/nav.component';
import { NavbarComponent } from './Page/Shared/navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    CardgroupComponent,
    PreCadatroComponent,
    ConfigProgramaComponent,
    LoginComponent,
    CadastrarLoginComponent,
    PontuacaoComponent,
    PerfilComponent,  
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   AppRoutingModule,
   ConfigProgramaModule,  
],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
