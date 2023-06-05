import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Categoria } from 'src/app/core/models/categoria.model';
import { Lancamento } from 'src/app/core/models/lancamento.model';
import { PreLoad } from 'src/app/core/models/pre-load.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  alertSucesso!: boolean;
  alertFalha!: boolean;

  msgSucesso!:string;
  msgFalha!:string;


  categoria: Categoria = new Categoria();

  categorias:Categoria[] = [];

  categoriaSelecionado:Categoria = new Categoria();

  constructor(private http: HttpService) {
  }

  async ngOnInit(): Promise<void> {

    await this.http.getCategorias()
    .pipe(
      tap(success => {
        this.categorias = success;
      }),
      catchError(() => {
        // Handle error here
        return of(null);
      })
    )
    .subscribe();
  }

   async cadastrar() {
    try {
      const success = await this.http.postCategoria(this.categoria).toPromise();
      if (success !== undefined) {
        this.categorias.push(success);
        this.alertSucesso = true;
        this.msgSucesso = "Categoria salvo(a) com sucesso!"
        this.alertFalha = false
      }
    } catch (error) {
      this.alertFalha = true
      this.alertSucesso= false
      this.msgFalha = "Erro ao salvar Categoria!"
    }
  }

   // Configuração da ordenação
   key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
   reverse: boolean = false;
   sort(key : any) {
     this.key = key;
     this.reverse = !this.reverse;
   }
   preparaDelecao(categoria: Categoria){
    console.log(categoria)
    this.categoriaSelecionado = categoria
  }
  async deletarCategoria(categoria: Categoria){
    await this.http.deleteCategoria(categoria)
    .pipe(
      tap(success => {
        if(success){
          this.alertSucesso = success
          this.msgSucesso = "Categoria deletado(a) com sucesso!"
          // remover dos lancamentos o lancamento deletado
          this.categorias = this.categorias.filter(e => e !== categoria);
        this.alertFalha =false;
        }
        
      }),
      catchError(() => {
        this.alertSucesso = false;
        this.alertFalha = true;
        this.msgFalha = "Só é possível deletar Categoria quando não houver lançamento atrelado a ele!"
        return of(null);
      })
    )
    .subscribe();
  }
}