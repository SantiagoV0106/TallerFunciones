/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */

const letras = ['D', 'C', 'A'];
const numeros = [2, 2, 0, 2, 2];

export const joiner = (letras: Array<number | string>, numeros: Array<number | string>) => {

    const [L, N] = numeros.length > letras.length ? [letras, numeros] : [numeros, letras];

    return Array.from({
        length: L.length * 4
    }).map((_, i) => i % 2 == 0 ? L[i / 2] : N[Math.ceil(i / 2) - 1]).filter(eL => eL);
};

console.log(joiner(letras, numeros));



