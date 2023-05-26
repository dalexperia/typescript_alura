export class View {
    constructor(seletor, scape) {
        this.scape = false;
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}
