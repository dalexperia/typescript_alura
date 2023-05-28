export function domInject(seletor) {
    return function (target, propertyKey) {
        console.log(`Modificando prototype ${target.constructor.name}
         e propriedade ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Buscando no DOM o seletor ${seletor}
            para injetar em ${propertyKey}`);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
