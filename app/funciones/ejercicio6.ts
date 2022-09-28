/**
 * Ejercicio 6
 * cree una función que a partir de una arreglo de número y letras, ordene el arreglo con todas las
 * letras en las primeras posiciones (ordenadas alfabeticamente) y luego ponga todos los número
 * ordenados ascendentemente.
 *
 * ejem:
 * el arreglo ["b", 6, "a", "q", 7, 2] retornará ["a", "b", "q", 2, 6, 7]
 */

const arrns = ['a', 1, 3,'b',2,'c']

function ordenadora(arrns:Array<any>) {

    var arreglito = arrns;
    const arregloorganizado: any[] = [];

    arrns = arrns.filter(number => Number.isInteger(number))
    arreglito = arreglito.filter(string => !Number.isInteger(string))

    arrns.sort()
    arreglito.sort()
    arreglito.forEach(element => {
        arregloorganizado.push(element)
    })

    arrns.forEach(element => {
        arregloorganizado.push(element)
    })

    return arregloorganizado

    
}

console.log(ordenadora(arrns));
