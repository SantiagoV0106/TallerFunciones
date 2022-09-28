/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */



type DividerResponse = { pares: Array<Number>; impares: Array<Number> };

const divider = (a: Array<Number>): DividerResponse => {
    const result: DividerResponse = { impares: [], pares: [] };
    a.forEach((n: Number) => {

        if (Number(n) % 2 == 0) {
            result.pares.push(n);
        }

        else {

            result.impares.push(n);
        }

    });

    return result;
};