import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Categoria } from 'src/app/core/models/categoria.model';
import { Lancamento } from 'src/app/core/models/lancamento.model';
import { PreLoad } from 'src/app/core/models/pre-load.model';
import { HttpService } from 'src/app/core/services/http.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  msgSucesso!: boolean;
  msgfalha!: boolean;

  categoria: Categoria = new Categoria();

  categorias:Categoria[] = [];



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

   async onSubmit() {
    console.log(this.categoria)
    try {
      const success = await this.http.postCategoria(this.categoria).toPromise();
      if (success !== undefined) {
        this.categorias.push(success);
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