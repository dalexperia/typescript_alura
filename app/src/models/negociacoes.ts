import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Imprimivel, Comparavel<Negociacoes>{
    
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    public lista(): readonly Negociacao[] {
        return this.negociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(
            this.lista(),
            null,
            2
        );
    }

    ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }

}