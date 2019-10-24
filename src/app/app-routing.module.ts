import { AuthService } from './Guards/auth.service';
import { ClientGuard } from './Guards/client.guard';
import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { LoginComponent } from './Page/Account/login/login.component';

import { PremiosComponent } from './Page/ProgramaFidelidade/config-programa/premios/premios.component';
import { RegraComponent } from './Page/ProgramaFidelidade/config-programa/regra/regra.component';
import { ConfigProgramaComponent } from './Page/ProgramaFidelidade/config-programa/config-programa.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { PreCadatroComponent } from './Page/ProgramaFidelidade/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PontuacaoComponent } from './Page/ProgramaFidelidade/pontuacao/pontuacao.component';
import { LoginClienteComponent } from './Page/AccountCliente/login-cliente/login-cliente.component';
import { CadastrarClienteComponent } from './Page/AccountCliente/cadastrar-cliente/cadastrar-cliente.component';
import { ListarEmpresasComponent } from './Page/Home/listar-empresas/listar-empresas.component';
import { ProgramLoyaltyComponent } from './Page/settings/program-loyalty/program-loyalty.component';
import { ListProgramComponent } from './Page/settings/program-loyalty/config-punctuation/list-programa/list-program.component';
import { AwardListComponent } from './Page/settings/program-loyalty/config-awards/award-list/award-list.component';
import { PerfilComponent } from './Page/Account/perfil/perfil.component';
import { AdminGuard } from './Guards/Admin.guard';


const appRoutes = [

  {
    path: '',
    component: MenuComponent,
    canActivate: [AuthService, AdminGuard],
    children: [

      { path: '', component: CardgroupComponent },
      { path: 'home', component: CardgroupComponent },

      { path: 'preCadastro', component: PreCadatroComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'pontuacao', component: PontuacaoComponent },



      {
        path: 'config', component: ProgramLoyaltyComponent,
        children: [
          { path: 'listPunctuation', component: ListProgramComponent },
          // tslint:disable-next-line: whitespace
          { path: 'listAward', component: AwardListComponent },]

      },

    ]
  },
  { path: 'cliente', component: ListarEmpresasComponent, canActivate: [ClientGuard] },

  { path: 'login', component: LoginComponent },
  { path: 'loginCliente', component: LoginClienteComponent },
  { path: 'cadastrar', component: CadastrarLoginComponent },
  { path: 'cadastrarCliente', component: CadastrarClienteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
