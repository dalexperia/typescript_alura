import { Negociacao } from "../models/negociacao.js";

export function imprimir(...objects: any[]) {
    for(let obj of objects) {
        console.log(obj.paraTexto())
    }
}