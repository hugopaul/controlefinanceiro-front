import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LancamentosComponent } from './components/lancamentos/lancamentos.component';
import { HomeComponent } from './components/template/home/home.component';


const routes: Routes = [
  { path: 'home' , component: HomeComponent },
  { path: 'lancamentos' , component: LancamentosComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
