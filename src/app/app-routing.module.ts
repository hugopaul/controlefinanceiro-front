import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { HomeComponent } from './components/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipogastosComponent } from './components/tipogastos/tipogastos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LancamentosListComponent } from './components/lancamentos-list/lancamentos-list.component';
import { LoginComponent } from './login/login/login.component';
import { GuardGuard } from './core/guard/guard.guard';
import { EmprestimosComponent } from './components/emprestimos/emprestimos.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'lancamentos', component: LancamentosComponent, canActivate: [GuardGuard] },
  { path: 'emprestimos', component: EmprestimosComponent, canActivate: [GuardGuard] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [GuardGuard] },
  { path: 'tipogastos', component: TipogastosComponent, canActivate: [GuardGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [GuardGuard] },
  { path: 'lancamentos/list', component: LancamentosListComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' } // rota de fallback

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
