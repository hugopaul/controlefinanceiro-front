import { Component, OnInit } from '@angular/core';
import { Lancamento } from 'src/app/core/models/lancamento.model';
import { PreLoad } from 'src/app/core/models/pre-load.model';
import { tap, catchError } from 'rxjs/operators'
import { HttpService } from 'src/app/core/services/http/http.service';
import { of } from 'rxjs';
import { Categoria } from 'src/app/core/models/categoria.model';
import { TipoGasto } from 'src/app/core/models/tipo-gasto.model';
import { Usuario } from 'src/app/core/models/usuario.model';

@Component({
  selector: 'app-lancamentos',
  templateUrl: './lancamentos.component.html',
  styleUrls: ['./lancamentos.component.scss']
})
export class LancamentosComponent implements OnInit {

  msgSucesso!: boolean;
  msgfalha!: boolean;

  valorGasto!: string;

  lancamento: Lancamento = new Lancamento();
  preLoad: PreLoad = new PreLoad();



  constructor(private http: HttpService) {

  }

  async ngOnInit(): Promise<void> {

    await this.http.getPreLoad()
      .pipe(
        tap(success => {
          this.preLoad = success;
        }),
        catchError(() => {
          // Handle error here
          return of(null);
        })
      )
      .subscribe();
  }

  async onSubmit() {

    const targetElement = document.getElementById('target-element');

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'

      });
    }
    this.lancamento.valor = this.valorGasto;
    console.log(this.lancamento)
    try {
      const success = await this.http.postLancamento(this.lancamento).toPromise();
      this.msgSucesso = true;
      console.log(success);

    } catch (error) {
      this.msgfalha = true;
      console.log(error);
    }

  }

  compraParcelada() {
    this.lancamento.parcelado = !this.lancamento.parcelado;
  }

  onKeyUp(x: any) {
    this.valorGasto = this.valorGasto + '';
    this.valorGasto = this.valorGasto.replace(/\D+/g, '');
    this.valorGasto = this.valorGasto.replace(/([0-9]{2})$/g, ",$1");
    if (this.valorGasto.length > 6) {
      this.valorGasto = this.valorGasto.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    return this.valorGasto;
  }

  setTipoGasto(x: any) {
    console.log(x)
  }
}
