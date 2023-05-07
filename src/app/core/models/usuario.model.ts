import { Lancamento } from "./lancamento.model";

export class Usuario {

    id!: string;
    nome!: string;
    email!: string;
    senha!: string;
    descricao!: string;
    lancamentosGastos!: Lancamento[];
    dataCriacao!: string;
    dataAtualizacao!: string;
}