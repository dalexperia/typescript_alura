export function logarTempoExecucao() {
    return function (target, propertyKey, descriptor) {
        return descriptor;
    };
}
