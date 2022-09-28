const letras = ['D', 'C', 'A'];
const numeros = [2, 2, 0, 2, 2];
export const joiner = (letras, numeros) => {
    const [L, N] = numeros.length > letras.length ? [letras, numeros] : [numeros, letras];
    return Array.from({
        length: L.length * 4
    }).map((_, i) => i % 2 == 0 ? L[i / 2] : N[Math.ceil(i / 2) - 1]).filter(eL => eL);
};
console.log(joiner(letras, numeros));
