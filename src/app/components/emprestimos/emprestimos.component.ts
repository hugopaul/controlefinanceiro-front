import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Emprestimo } from 'src/app/core/models/emprestimo.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit{

  alertSucesso!: boolean;
  alertFalha!: boolean;

  msgSucesso!:string;
  msgFalha!:string;

  valorEmprestimo!:string;

  emprestimo: Emprestimo = new Emprestimo();

  emprestimos:Emprestimo[] = [];

  emprestimoSelecionado:Emprestimo = new Emprestimo();

  constructor(private http: HttpService) {
  }

  async ngOnInit(): Promise<void> {

    await this.http.getEmprestimos()
    .pipe(
      tap(success => {
        this.emprestimos = success;
      }),
      catchError(() => {
        // Handle error here
        return of(null);
      })
    )
    .subscribe();
  }

   async cadastrar() {
    this.emprestimo.valor = this.valorEmprestimo;
    try {
      const success = await this.http.postEmprestimo(this.emprestimo).toPromise();
      if (success !== undefined) {
        this.emprestimos.push(success);
        this.alertSucesso = true;
        this.msgSucesso = "Emprestimo salvo(a) com sucesso!"
        this.alertFalha = false
      }
    } catch (error) {
      this.alertFalha = true
      this.alertSucesso= false
      this.msgFalha = "Erro ao salvar Emprestimo!"
    }
  }

   // Configuração da ordenação
   key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
   reverse: boolean = false;
   sort(key : any) {
     this.key = key;
     this.reverse = !this.reverse;
   }
   preparaDelecao(emprestimo: Emprestimo){
    console.log(emprestimo)
    this.emprestimoSelecionado = emprestimo
  }
  async deletarEmprestimo(emprestimo: Emprestimo){
    await this.http.deleteEmprestimo(emprestimo)
    .pipe(
      tap(success => {
        if(success){
          this.alertSucesso = success
          this.msgSucesso = "Emprestimo deletado(a) com sucesso!"
          // remover dos lancamentos o lancamento deletado
          this.emprestimos = this.emprestimos.filter(e => e !== emprestimo);
        this.alertFalha =false;
        }
        
      }),
      catchError(() => {
        this.alertSucesso = false;
        this.alertFalha = true;
        this.msgFalha = "Só é possível deletar Emprestimo quando não houver lançamento atrelado a ele!"
        return of(null);
      })
    )
    .subscribe();
  }

  onKeyUp(x: any) {
    this.valorEmprestimo = this.valorEmprestimo + '';
    this.valorEmprestimo = this.valorEmprestimo.replace(/\D+/g, '');
    this.valorEmprestimo = this.valorEmprestimo.replace(/([0-9]{2})$/g, ",$1");
    if (this.valorEmprestimo.length > 6) {
      this.valorEmprestimo = this.valorEmprestimo.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }
    return this.valorEmprestimo;
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
