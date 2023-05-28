export function domInject(seletor: string){
    return function(target: any, propertyKey: string){
        const getter = function() {
            const elemento = document.querySelector(seletor);
            console.log(`Buscando no DOM o seletor ${seletor}
            para injetar em ${propertyKey}`);
            return elemento;
    }

    Object.defineProperty(
        target, propertyKey, {get: getter}
    );
}
}
