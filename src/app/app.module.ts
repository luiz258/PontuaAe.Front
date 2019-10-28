import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { AppComponent } from './app.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { PreCadatroComponent } from './Page/AccountCliente/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { NavComponent } from './Page/Shared/nav/nav.component';
import { NavbarComponent } from './Page/Shared/navbar/navbar.component';
import { CarregarComponent } from './Page/Shared/carregar/carregar.component';
import { AutenticacaoService } from './Service/Autenticacao.service';
import { AuthService } from './Guards/auth.service';
import { PontuarComponent } from './Page/Pointing/pontuar/pontuar.component';
import { RegatarComponent } from './Page/Pointing/resgatar/resgatar.component';
import { LoginClienteComponent } from './Page/AccountCliente/login-cliente/login-cliente.component';
import { RegisterCustomerComponent } from './Page/AccountCliente/cadastrar-cliente/register-customer.component';
import { ListCompanyComponent } from './Page/Home/list-company/list-company.component';
import { ListProgramComponent } from './Page/settings/program-loyalty/config-point.ts/list-program/list-program.component';
import { PointCreateComponent } from './Page/settings/program-loyalty/config-point.ts/point-create/point-create.component';
import { AwardListComponent } from './Page/settings/program-loyalty/config-awards/award-list/award-list.component';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ProgramLoyaltyComponent } from './Page/settings/program-loyalty/program-loyalty.component';
import { CustomerService } from './Service/Customer.service';
import { ClientGuard } from './Guards/client.guard';
import { AdminGuard } from './Guards/Admin.guard';



export let options: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavComponent,
    CardgroupComponent,
    PreCadatroComponent,
    LoginComponent,
    CadastrarLoginComponent,
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

    ProgramLoyaltyComponent 
  ],

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
    NgxMaskModule.forRoot(options),
  ],
  exports: [],
  providers: [AutenticacaoService, AuthService, ClientGuard, AdminGuard],

  bootstrap: [AppComponent]
})
export class AppModule { }
