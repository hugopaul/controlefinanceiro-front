import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './template/footer/footer.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { TipogastosComponent } from './tipogastos/tipogastos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { OrderModule } from 'ngx-order-pipe';
import { LancamentosListComponent } from './lancamentos-list/lancamentos-list.component';
import { GraficosComponent } from './graficos/graficos.component';
import { DiariosPorMesComponent } from './graficos/diarios-por-mes/diarios-por-mes.component';
import { MensaisPorAnoComponent } from './graficos/mensais-por-ano/mensais-por-ano.component';
import { EmprestimosComponent } from './emprestimos/emprestimos.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LancamentosComponent,
    HomeComponent,
    CategoriasComponent,
    TipogastosComponent,
    UsuariosComponent,
    LancamentosListComponent,
    GraficosComponent,
    DiariosPorMesComponent,
    MensaisPorAnoComponent,
    EmprestimosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    OrderModule,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    LancamentosComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
