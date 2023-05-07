import { Categoria } from "./categoria.model";
import { TipoGasto } from "./tipo-gasto.model";
import { Usuario } from "./usuario.model";

export class PreLoad {
    tipoGastos!:TipoGasto[];
    categorias!:Categoria[];
    usuarios!:Usuario[];
}