import { CadastrarLoginComponent } from './Page/Account/cadastrar-login/cadastrar-login.component';
import { LoginComponent } from './Page/Account/login/login.component';
import { PerfilComponent } from './Page/ProgramaFidelidade/perfil/perfil.component';
import { PremiosComponent } from './Page/ProgramaFidelidade/config-programa/premios/premios.component';
import { RegraComponent } from './Page/ProgramaFidelidade/config-programa/regra/regra.component';
import { ConfigProgramaComponent } from './Page/ProgramaFidelidade/config-programa/config-programa.component';
import { MenuComponent } from './Page/Shared/Menu.component';
import { PreCadatroComponent } from './Page/ProgramaFidelidade/pre-cadatro/pre-cadatro.component';
import { CardgroupComponent } from './Page/Home/cardgroup/cardgroup.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PontuacaoComponent } from './Page/ProgramaFidelidade/pontuacao/pontuacao.component';


const appRoutes = [

  {
    path: '', component: MenuComponent, children: [

      { path: '', component: CardgroupComponent },
      { path: 'home', component: CardgroupComponent },
      { path: 'preCadastro', component: PreCadatroComponent },
      { path: 'perfil', component: PerfilComponent },
      { path: 'pontuacao', component: PontuacaoComponent },
      {
        path: 'config', component: ConfigProgramaComponent,
        children: [
          { path: 'regra/:id', component: RegraComponent },
          { path: 'premios/:id', component: PremiosComponent },]
      },
    ]
  },
  
  { path: 'login', component: LoginComponent },
  { path: 'cadastrarlogin', component: CadastrarLoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
