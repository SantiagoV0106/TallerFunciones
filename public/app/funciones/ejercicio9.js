const factorial = (numero) => {
    if (numero === 1)
        return 1;
    factorial(1);
    return numero * factorial(numero - 1);
};
console.log(factorial(2));
