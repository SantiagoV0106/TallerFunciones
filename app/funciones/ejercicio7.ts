/**
 * Ejercicio 7
 * Print integers 1 to N, but print “Fizz” if an integer is divisible by 3, “Buzz” if an integer is divisible
 * by 5, and “FizzBuzz” if an integer is divisible by both 3 and 5
 */

 const arreglo:Array<number> = [6,5,15];
 
 for (let i = 1; i <= arreglo.length; i = i + 1) {
     if((i % 3 == 0) && (i % 5 == 0)) {
         console.log('FizzBuzz');
     } else if ((i % 3 == 0)) {
         console.log('Fizz');
     } else if ((i % 5) == 0) {
         console.log('Buzz');
     } 
 }