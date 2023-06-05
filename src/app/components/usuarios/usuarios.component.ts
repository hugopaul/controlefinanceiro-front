import { Component, OnInit } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { HttpService } from 'src/app/core/services/http/http.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  msgSucesso!: boolean;
  msgfalha!: boolean;

  usuario: Usuario = new Usuario();

  usuarios:Usuario[] = [];

  usuarioSelecionado:Usuario = new Usuario;



  constructor(private http: HttpService) {
  }

  async ngOnInit(): Promise<void> {

    await this.http.getUsuarios()
    .pipe(
      tap(success => {
        this.usuarios = success;
      }),
      catchError(() => {
        // Handle error here
        return of(null);
      })
    )
    .subscribe();
  }

   async onSubmit() {
    try {
      const success = await this.http.postUsuario(this.usuario).toPromise();
      if (success !== undefined) {
        this.usuarios.push(success);
      }
      this.msgSucesso = true;

    } catch (error) {
      this.msgfalha = true;
    }
  }

   // Configuração da ordenação
   key: string = 'id'; // Define um valor padrão, para quando inicializar o componente
   reverse: boolean = false;
   sort(key : any) {
     this.key = key;
     this.reverse = !this.reverse;
   }
   preparaDelecao(usuario: Usuario){
    this.usuarioSelecionado = usuario
  }
  async deletarUsuario(usuario: Usuario){
    await this.http.deleteUsuario(usuario)
    .pipe(
      tap(success => {
        if(success){
          this.msgSucesso = success
          // remover dos lancamentos o lancamento deletado
          this.usuarios = this.usuarios.filter(e => e !== usuario);
        this.msgfalha =false;
        }
        
      }),
      catchError(() => {
        this.msgSucesso = false;
        this.msgfalha = true;
        return of(null);
      })
    )
    .subscribe();
  }
}