import { Negociacao } from "../models/negociacao.js";
import { Imprimivel } from "./imprimivel.js";

export function imprimir(...objects: Imprimivel[]) {
    for(let obj of objects) {
        console.log(obj.paraTexto())
    }
}