import { EnvironmentInjector, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Lancamento } from "../models/lancamento.model";
import { Observable } from "rxjs";

import { environment } from 'src/environments/environment';
import { Categoria } from "../models/categoria.model";
import { TipoGasto } from "../models/tipo-gasto.model";
import { Usuario } from "../models/usuario.model";
import { PreLoad } from "../models/pre-load.model";

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

}