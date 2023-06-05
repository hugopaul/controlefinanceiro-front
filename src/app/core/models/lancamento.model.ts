import { Categoria } from "./categoria.model";
import { TipoGasto } from "./tipo-gasto.model";
import { Usuario } from "./usuario.model";

export class Lancamento {
    id!: string;
    descricao!: string;
    valor!: string;
    categoria: Categoria = new Categoria;
    tipoGasto: TipoGasto = new TipoGasto;
    usuario: Usuario = new Usuario;
    dataHora!: string;
    dataCriacao!: string;
    dataAtualizacao!: string;
    parcelado!: boolean;
    qtdParcela!:number;
    valorParcela!:string;
    despesaFixa!: boolean;
}
