import { AuthService } from './Guards/auth.service';
import { ClientGuard } from './Guards/client.guard';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { PreCadatroComponent } from './Page/AccountCliente/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import {Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginClienteComponent } from './Page/AccountCliente/login-cliente/login-cliente.component';
import { RegisterCustomerComponent } from './Page/AccountCliente/cadastrar-cliente/register-customer.component';
import { ListCompanyComponent } from './Page/Home/list-company/list-company.component';
import { ProgramLoyaltyComponent } from './Page/settings/program-loyalty/program-loyalty.component';
import { ListProgramComponent } from './Page/settings/program-loyalty/config-point.ts/list-program/list-program.component';
import { AwardListComponent } from './Page/settings/program-loyalty/config-awards/award-list/award-list.component';
import { PerfilComponent } from './Page/Account/perfil/perfil.component';
import { AdminGuard } from './Guards/Admin.guard';
import { PontuarComponent } from './Page/Pointing/pontuar/pontuar.component';
import { ListClientPageComponent } from './Page/Client/list-client-page/list-client-page.component';
import { CardPointComponent } from './Page/Home/card-point/card-point.component';



const routes:  Routes = [

  {
    path: '',
    component: MenuComponent,
    //canActivate: [AuthService, AdminGuard],
    children: [

      { path: '', component: CardgroupComponent },
      { path: 'home', component: CardgroupComponent },
      

      { path: 'preCadastro', component: PreCadatroComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'point', component: PontuarComponent },

      { path: 'listClientPage', component: ListClientPageComponent },

      {
        path: 'config', component: ProgramLoyaltyComponent,
        children: [
          { path: 'listPoint', component: ListProgramComponent },
          { path: 'listAward', component: AwardListComponent },
         // { path: '', redirectTo: '/config', pathMatch: 'full' },
         
        ]
      },
    ]
  },
  
 
  { path: 'cliente', component: ListCompanyComponent, canActivate: [ClientGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'cadastrar', component: CadastrarLoginComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
