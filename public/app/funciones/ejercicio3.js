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
