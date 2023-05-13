import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Lancamento } from 'src/app/core/models/lancamento.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-lancamentos-list',
  templateUrl: './lancamentos-list.component.html',
  styleUrls: ['./lancamentos-list.component.scss']
})
export class LancamentosListComponent implements OnInit{
  msgSucesso!: boolean;
  msgfalha!: boolean;

  maskMoney = ({
    prefix: 'R$ ',
    thousandsSeparatorSymbol: '.',
    decimalSymbol: ',',
    allowDecimal: true,
    decimalLimit: 2,
  });

  lancamentos: Lancamento[] = [];

  constructor(private http: HttpService){  }

  async ngOnInit(): Promise<void> {

    await this.http.getLancamentos()
    .pipe(
      tap(success => {
        this.lancamentos = success;
      }),
      catchError(() => {
        // Handle error here
        return of(null);
      })
    )
    .subscribe();
  }

  // Configuração da ordenação
  key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
  reverse: boolean = false;
  sort(key : any) {
    this.key = key;
    this.reverse = !this.reverse;
  }

  formataValor(valorString: string): string {
    // Converte o valor para um número e adiciona os zeros à direita para garantir que tenha duas casas decimais
    const valor = Number(valorString).toFixed(2);
    
    // Separa a parte inteira da parte decimal
    const [parteInteira, parteDecimal] = valor.split('.');
  
    // Adiciona o separador de milhares à parte inteira, separando em grupos de três dígitos
    const parteInteiraFormatada = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  
    // Retorna o valor formatado em reais
    return `R$ ${parteInteiraFormatada},${parteDecimal}`;
  }
}
