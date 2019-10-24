import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { RegisterCustomerComponent } from './Page/AccountCliente/cadastrar-cliente/register-customer.component';
import { ListCompanyComponent } from './Page/Home/list-company/list-company.component';
import { ListProgramComponent } from './Page/settings/program-loyalty/config-punctuation/list-programa/list-program.component';
import { PointCreateComponent } from './Page/settings/program-loyalty/config-punctuation/point-create/point-create.component';
import { AwardListComponent } from './Page/settings/program-loyalty/config-awards/award-list/award-list.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ProgramLoyaltyComponent } from './Page/settings/program-loyalty/program-loyalty.component';
import { CustomerService } from './Service/Customer.service';




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
    RegisterCustomerComponent,
    ListCompanyComponent,
    AppComponent,
    PointCreateComponent,
    AwardListComponent,
    ListProgramComponent,
    ProgramLoyaltyComponent  ],
  imports: [

    BrowserModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,

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
  providers: [AutenticacaoService, AuthService, CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
