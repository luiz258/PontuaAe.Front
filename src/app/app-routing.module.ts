import { AuthService } from './Guards/auth.service';
import { ClientGuard } from './Guards/client.guard';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { PreCadatroComponent } from './Page/AccountCliente/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginClienteComponent } from './Page/AccountCliente/login-cliente/login-cliente.component';
import { RegisterCustomerComponent } from './Page/AccountCliente/cadastrar-cliente/register-customer.component';
import { ListCompanyComponent } from './Page/Home/list-company/list-company.component';
import { ProgramLoyaltyComponent } from './Page/settings/program-loyalty/program-loyalty.component';
import { ListProgramComponent } from './Page/settings/program-loyalty/config-point.ts/list-program/list-program.component';
import { AwardListComponent } from './Page/settings/program-loyalty/config-awards/award-list/award-list.component';
import { PerfilComponent } from './Page/Account/perfil/perfil.component';
import { AdminGuard } from './Guards/Admin.guard';

// import { PontuarComponent } from './Page/Pointing/pontuar/pontuar.component';


const appRoutes = [

  {
    path: '',
    component: MenuComponent,

    canActivate: [AuthService],
    children: [

      { path: '', component: CardgroupComponent, canActivate: [AdminGuard] },
      { path: 'home', component: CardgroupComponent, canActivate: [AdminGuard] },

      { path: 'preCadastro', component: PreCadatroComponent, canActivate: [AdminGuard] },
      { path: 'perfil', component: PerfilComponent, canActivate: [AdminGuard] },
      //  { path: 'pontuacao', component:  },

      {
        path: 'config', component: ProgramLoyaltyComponent,
        canActivate: [AdminGuard],
        children: [

          { path: 'listPoint', component: ListProgramComponent },
          { path: 'listAward', component: AwardListComponent },
        ]
      },

      { path: 'cliente', component: ListCompanyComponent, canActivate: [ClientGuard] },
    ]


  },


  { path: 'login', component: LoginComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'cadastrar', component: CadastrarLoginComponent },
  { path: 'registerCustomer', component: RegisterCustomerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
