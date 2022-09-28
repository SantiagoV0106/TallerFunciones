function dados(suma) {
    var dado1 = Math.floor(Math.random() * 6);
    var dado2 = Math.floor(Math.random() * 6);
    for (let index = 1; index < 12; index++) {
        if (dado1 + dado2 == index) {
            suma[index] = +1;
        }
    }
    return suma;
}
console.log(dados);
