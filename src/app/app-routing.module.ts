import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { HomeComponent } from './components/template/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipogastosComponent } from './components/tipogastos/tipogastos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { LancamentosListComponent } from './components/lancamentos-list/lancamentos-list.component';
import { LoginComponent } from './login/login/login.component';
import { GuardGuard } from './core/guard/guard.guard';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [GuardGuard] },
  { path: 'lancamentos', component: LancamentosComponent, canActivate: [GuardGuard] },
  { path: 'categorias', component: CategoriasComponent, canActivate: [GuardGuard] },
  { path: 'tipogastos', component: TipogastosComponent, canActivate: [GuardGuard] },
  { path: 'usuarios', component: UsuariosComponent, canActivate: [GuardGuard] },
  { path: 'lancamentos/list', component: LancamentosListComponent, canActivate: [GuardGuard] },
  { path: 'login', component: LoginComponent, }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
