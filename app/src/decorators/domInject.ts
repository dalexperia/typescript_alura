export function domInject(seletor: string){
    return function(target: any, propertyKey: string){
        console.log(`Modificando prototype ${target.constructor.name}
         e propriedade ${propertyKey}`);
         let elemento: HTMLElement;
        const getter = function() {
            if(!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Buscando no DOM o seletor ${seletor}
            para injetar em ${propertyKey}`);
            }
            return elemento;
            }

        Object.defineProperty(
            target, propertyKey, {get: getter}
        );
    }
}
