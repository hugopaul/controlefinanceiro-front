import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './template/footer/footer.component';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './template/home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    LancamentosComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    LancamentosComponent,
    HomeComponent
  ]
})
export class ComponentsModule { }
