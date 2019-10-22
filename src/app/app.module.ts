import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as  Cloudinary from 'cloudinary-core';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { AppComponent } from './app.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { PontuacaoComponent } from './Page/ProgramaFidelidade/pontuacao/pontuacao.component';
import { PerfilComponent } from './Page/Account/perfil/perfil.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { ConfigProgramaComponent } from './Page/ProgramaFidelidade/config-programa/config-programa.component';
import { PreCadatroComponent } from './Page/ProgramaFidelidade/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { NavComponent } from './Page/Shared/nav/nav.component';
import { NavbarComponent } from './Page/Shared/navbar/navbar.component';
import { CarregarComponent } from './Page/Shared/carregar/carregar.component';

import { ConfigProgramaModule } from './Page/ProgramaFidelidade/config-programa/config-programa.module';

import { AutenticacaoService } from './Service/Autenticacao.service';
import { AuthService } from './Service/auth.service';
import { PontuarComponent } from './Page/ProgramaFidelidade/pontuacao/pontuar/pontuar.component';
import { RegatarComponent } from './Page/ProgramaFidelidade/pontuacao/regatar/regatar.component';
import { LoginClienteComponent } from './Page/AccountCliente/login-cliente/login-cliente.component';
import { CadastrarClienteComponent } from './Page/AccountCliente/cadastrar-cliente/cadastrar-cliente.component';
import { ClienteService } from './Service/Cliente.service';
import { ListarEmpresasComponent } from './Page/Home/listar-empresas/listar-empresas.component';




export let options: Partial<IConfig> | (() => Partial<IConfig>);


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
    MenuComponent,
    CarregarComponent,
    PontuarComponent,
    RegatarComponent,
    LoginClienteComponent,
    CadastrarClienteComponent,
    ListarEmpresasComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ConfigProgramaModule,
    NgxMaskModule.forRoot(options),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'pontuaae' }),
  ],
  exports: [],
  providers: [AutenticacaoService, AuthService, ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
