import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logarTempoExecucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;

    constructor(seletor: string) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = <HTMLElement>elemento;
        }else{
            throw Error(`Elemento ${seletor} não existe`);
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        this.elemento.innerHTML = template;

    }
}