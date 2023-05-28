import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logarTempoExecucao.js";

export abstract class View<T> {
    protected elemento: HTMLElement;
    private scape = false;

    constructor(seletor: string, scape?: boolean) {
        const elemento = document.querySelector(seletor);
        if(elemento) {
            this.elemento = <HTMLElement>elemento;
        }else{
            throw Error(`Elemento ${seletor} não existe`);
        }
        
        if(scape) {
            this.scape = scape;
        }
    }

    protected abstract template(model: T): string;

    @inspect()
    @logarTempoExecucao()
    public update(model: T): void {
        let template = this.template(model);
        if(this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;

    }
}