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

console.log(dados);
