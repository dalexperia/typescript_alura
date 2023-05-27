export function logarTempoExecucao(inSeconds: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milissegundos';
            if(inSeconds) {
                divisor = 1000;
                unidade ='segundos'
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`Tempo de execução do método ${propertyKey}: ${(t2 - t1)/divisor} ${unidade}`);
            return retorno;
        }
        return descriptor;
    }
}