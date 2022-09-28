/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */

const arreglo1 = ["a", "b", "c"]
const arreglo2 = ["e", "d", "f"]
const arreglo3 = ["g", "i", "h"]

var order = arreglo1.concat(arreglo2, arreglo3);

function ordenAlf(array: Array<String>){
    var arregloordenao = [];
    array.sort();

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        arregloordenao.push(element)
    }

    return arregloordenao;

}

console.log(ordenAlf(order));
