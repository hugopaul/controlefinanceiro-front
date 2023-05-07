import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { HomeComponent } from './components/template/home/home.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { TipogastosComponent } from './components/tipogastos/tipogastos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'lancamentos' , component: LancamentosComponent },
  { path: 'categorias' , component: CategoriasComponent },
  { path: 'tipogastos' , component: TipogastosComponent },
  { path: 'usuarios' , component: UsuariosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
