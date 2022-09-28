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