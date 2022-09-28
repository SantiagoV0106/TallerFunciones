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

/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */


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

/**
 * Ejercicio 4
 * dadas dos listas de palabras, retorne una unica lista en la cual se encuentren las palabras
 * que existan en las dos listas iniciales, además ordene esta última lista de manera que las
 * palabras repetidas más veces en ambos arreglos se encuentren al inicio de la lista.
 *
 * ejem:
 * ["rat", "dog", "cat", "parrot", "cat"] y ["cat", "lizard", "rat", "cat"] devolverán ["cat", "rat"]
 */

 const lista1 = ['gato', 'perro', 'gato', 'rana']
 const lista2 = ['caballo', 'rana', 'gato', 'abeja']
 
 
 const repetidos = lista1.filter(element => lista2.includes(element));
 
 console.log(repetidos);

/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */

 const arr1 = [1,2,3,4]
 const arr2 = [1,2,3,4,5,6,7]
 
 const commonarr = arr1.some(element => {
   return arr2.includes(element);
 
 });
 
 console.log(commonarr);

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


/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

 const arreglo:Array<number> = [15, 6, 126, 105];
 
 for (let i = 1; i <= arreglo.length; i = i + 1) {
     if((i % 3 == 0) && (i % 5 == 0)) {
         console.log('FizzBuzz');
     } else if ((i % 3) == 0) {
         console.log('Fizz');
     } else if ((i % 5) == 0) {
         console.log('Buzz');
     } 
 }

/**
 * Ejercicio 8
 * dado un arreglo de ideas, donde estas pueden ser buenas o malas, imprima un mensaje con las
 * siguientes condiciones:
 * - si el arreglo no contiene ninguna buena idea entonces el mensaje es "fallo"
 * - si el arreglo contiene 1 o 2 buenas ideas entonces el mensaje es "publicar"
 * - si el arreglo contiene más de 2 buenas ideas entonces el mensaje es "fantastico"
 */


/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
 type Factorial = (numero: number) => number


 const factorial: Factorial = (numero: number) => {
     if(numero === 1) return 1;
     factorial(1);
     return numero * factorial(numero-1);
 };
 
 console.log(factorial(2));
/**
 * Ejercicio 10
 * cree una funcion que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para
 * obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el
 * resultado de lanzar dos dados y anotar en un objeto el número de apariciones de dicha suma.
 * ejemplo del resultado:
 * const result = { "7": 3, "2": 1 }
 */

 function dados(suma:Number) {

    var dado1 = Math.floor(Math.random()*6)
    var dado2 = Math.floor(Math.random()*6)

    for (let index = 1; index < 12; index++) {
       if (dado1+dado2 == index) {
        suma[index] =+ 1
        
       }
        
    }

    return suma
}

console.log('no pude pintar esta');







