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

    public update(model: T): void {
        /*
        Calcular a performance da página
        */
        const t1 = performance.now();
        let template = this.template(model);
        if(this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2 - t1)/1000} segundos`)
    }
}