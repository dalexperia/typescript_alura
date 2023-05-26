export class View {
    constructor(seletor, scape) {
        this.scape = false;
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Elemento ${seletor} não existe`);
        }
        if (scape) {
            this.scape = scape;
        }
    }
    update(model) {
        const t1 = performance.now();
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
        const t2 = performance.now();
        console.log(`Tempo de execução do método update: ${(t2 - t1) / 1000} segundos`);
    }
}
