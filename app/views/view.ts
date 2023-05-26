export abstract class View<T> {
    protected elemento: HTMLElement;
    private scape = false;

    constructor(seletor: string, scape?: boolean) {
        this.elemento = document.querySelector(seletor);
        if(scape) {
            this.scape = scape;
        }
    }

    protected abstract template(model: T): string;

    public update(model: T): void {
        let template = this.template(model);
        if(this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/,'');
        }
        this.elemento.innerHTML = template;
    }
}