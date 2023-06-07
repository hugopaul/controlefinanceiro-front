import { EnvironmentInjector, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Lancamento } from "../../models/lancamento.model";
import { Observable } from "rxjs";

import { environment } from 'src/environments/environment';
import { Categoria } from "../../models/categoria.model";
import { TipoGasto } from "../../models/tipo-gasto.model";
import { Usuario } from "../../models/usuario.model";
import { PreLoad } from "../../models/pre-load.model";
import { Login } from "../../models/login.model";
import { Token } from "../../models/token.model";
import { Gasto } from "../../models/gasto.model";
import { Emprestimo } from "../../models/emprestimo.model";

@Injectable({
    providedIn: 'root'
})
export class HttpService{

    url:string = environment.apiUrl;

    constructor(
        private http: HttpClient
    ) { }

    postLancamento(lancamento:Lancamento): Observable<Lancamento>{
        return this.http.post<Lancamento>(this.url + "/lancamentos", lancamento)
    }

    postCategoria(categoria:Categoria): Observable<Categoria>{
        return this.http.post<Categoria>(this.url + "/categorias", categoria)
    }

    postTipoGasto(tipoGasto:TipoGasto): Observable<TipoGasto>{
        return this.http.post<TipoGasto>(this.url + "/tipogastos", tipoGasto)
    }

    postUsuario(usuario:Usuario): Observable<Usuario>{
        return this.http.post<Usuario>(this.url + "/usuarios", usuario)
    }
    postEmprestimo(emprestimo:Emprestimo): Observable<Emprestimo>{
        return this.http.post<Emprestimo>(this.url + "/emprestimos", emprestimo)
    }

    deleteLancamento(lancamento:Lancamento):Observable<boolean>{
        return this.http.delete<boolean>(this.url + "/lancamentos", {body: lancamento})
    }

    deleteCategoria(categoria:Categoria): Observable<boolean>{
        return this.http.delete<boolean>(this.url + "/categorias", {body: categoria})
    }

    deleteTipoGasto(tipoGasto:TipoGasto): Observable<boolean>{
        return this.http.delete<boolean>(this.url + "/tipogastos", {body: tipoGasto})
    }

    deleteUsuario(usuario:Usuario): Observable<boolean>{
        return this.http.delete<boolean>(this.url + "/usuarios", {body: usuario})
    }

    deleteEmprestimo(emprestimo:Emprestimo): Observable<boolean>{
        return this.http.delete<boolean>(this.url + "/emprestimos", {body: emprestimo})
    }


    getLancamentos(): Observable<Lancamento[]>{
        return this.http.get<Lancamento[]>(this.url + "/lancamentos")
    }

    getCategorias(): Observable<Categoria[]>{
        return this.http.get<Categoria[]>(this.url + "/categorias")
    }

    getTipoGastos(): Observable<TipoGasto[]>{
        return this.http.get<TipoGasto[]>(this.url + "/tipogastos")
    }

    getUsuarios(): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(this.url + "/usuarios")
    }

    getPreLoad(): Observable<PreLoad>{
        return this.http.get<PreLoad>(this.url + "/common")
    }

    getEmprestimos(): Observable<Emprestimo[]>{
        return this.http.get<Emprestimo[]>(this.url + "/emprestimos")
    }

    postLogin(login:Login): Observable<Token>{
        return this.http.post<Token>(this.url + "/auth/authenticate", login)
    }
    //CHARTS
    getChartBuscarValorDiarioUltimos30(): Observable<Gasto[]>{
        return this.http.get<Gasto[]>(this.url + "/charts/buscarValorDiarioUltimos30")
    }
    getChartBuscarValorMensalUltimosAno(): Observable<Gasto[]>{
        return this.http.get<Gasto[]>(this.url + "/charts/buscarValorTotalUltimosMeses")
    }
    getChartBuscarMediaDiariaUltimos30Dias():Observable<Gasto>{
        return this.http.get<Gasto>(this.url + "/charts/buscarMediaDiariaUltimos30Dias")
    }
    getChartBuscarMediaMensalUltimos12Meses():Observable<Gasto>{
        return this.http.get<Gasto>(this.url + "/charts/buscarMediaMensalUltimosMeses")
    }
}