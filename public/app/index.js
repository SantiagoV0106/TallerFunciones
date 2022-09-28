const letras = ['D', 'C', 'A'];
const numeros = [2, 2, 0, 2, 2];
export const joiner = (letras, numeros) => {
    const [L, N] = numeros.length > letras.length ? [letras, numeros] : [numeros, letras];
    return Array.from({
        length: L.length * 4
    }).map((_, i) => i % 2 == 0 ? L[i / 2] : N[Math.ceil(i / 2) - 1]).filter(eL => eL);
};
console.log(joiner(letras, numeros));
const arreglo1 = ["a", "b", "c"];
const arreglo2 = ["e", "d", "f"];
const arreglo3 = ["g", "i", "h"];
var order = arreglo1.concat(arreglo2, arreglo3);
function ordenAlf(array) {
    var arregloordenao = [];
    array.sort();
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arregloordenao.push(element);
    }
    return arregloordenao;
}
console.log(ordenAlf(order));
const lista1 = ['gato', 'perro', 'gato', 'rana'];
const lista2 = ['caballo', 'rana', 'gato', 'abeja'];
const repetidos = lista1.filter(element => lista2.includes(element));
console.log(repetidos);
const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const commonarr = arr1.some(element => {
    return arr2.includes(element);
});
console.log(commonarr);
const arrns = ['a', 1, 3, 'b', 2, 'c'];
function ordenadora(arrns) {
    var arreglito = arrns;
    const arregloorganizado = [];
    arrns = arrns.filter(number => Number.isInteger(number));
    arreglito = arreglito.filter(string => !Number.isInteger(string));
    arrns.sort();
    arreglito.sort();
    arreglito.forEach(element => {
        arregloorganizado.push(element);
    });
    arrns.forEach(element => {
        arregloorganizado.push(element);
    });
    return arregloorganizado;
}
console.log(ordenadora(arrns));
const arreglo = [15, 6, 126, 105];
for (let i = 1; i <= arreglo.length; i = i + 1) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');
    }
    else if ((i % 3) == 0) {
        console.log('Fizz');
    }
    else if ((i % 5) == 0) {
        console.log('Buzz');
    }
}
const factorial = (numero) => {
    if (numero === 1)
        return 1;
    factorial(1);
    return numero * factorial(numero - 1);
};
console.log(factorial(2));
function dados(suma) {
    var dado1 = Math.floor(Math.random() * 6);
    var dado2 = Math.floor(Math.random() * 6);
    for (let index = 1; index < 12; index++) {
        if (dado1 + dado2 == index) {
            suma[index] = +1;
        }
    }
    return suma;
}
console.log('no pude pintar esta');
