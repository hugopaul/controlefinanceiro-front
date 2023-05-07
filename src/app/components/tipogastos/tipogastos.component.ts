import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Lancamento } from 'src/app/core/models/lancamento.model';
import { PreLoad } from 'src/app/core/models/pre-load.model';
import { TipoGasto } from 'src/app/core/models/tipo-gasto.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-tipogastos',
  templateUrl: './tipogastos.component.html',
  styleUrls: ['./tipogastos.component.scss']
})
export class TipogastosComponent implements OnInit {

  msgSucesso!: boolean;
  msgfalha!: boolean;

  tipoGasto: TipoGasto = new TipoGasto();

  tipoGastos:TipoGasto[] = [];



  constructor(private http: HttpService) {
  }

  async ngOnInit(): Promise<void> {

    await this.http.getTipoGastos()
    .pipe(
      tap(success => {
        this.tipoGastos = success;
      }),
      catchError(() => {
        // Handle error here
        return of(null);
      })
    )
    .subscribe();
  }

   async onSubmit() {
    console.log(this.tipoGasto)
    try {
      const success = await this.http.postTipoGasto(this.tipoGasto).toPromise();
      if (success !== undefined) {
        this.tipoGastos.push(success);
      }
      console.log(success);
    } catch (error) {
      console.log(error);
    }
  }

   // Configuração da ordenação
   key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
   reverse: boolean = false;
   sort(key : any) {
     this.key = key;
     this.reverse = !this.reverse;
   }

}