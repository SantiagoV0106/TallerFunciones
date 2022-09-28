const lista1 = ['gato', 'perro', 'gato', 'rana'];
const lista2 = ['caballo', 'rana', 'gato', 'abeja'];
const repetidos = lista1.filter((item, index) => index !== lista1.indexOf(item));
console.log(repetidos);
