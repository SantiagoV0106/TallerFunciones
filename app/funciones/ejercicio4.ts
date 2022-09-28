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


const repetidos = lista1.filter((item, index) => index !== lista1.indexOf(item));

console.log(repetidos);

