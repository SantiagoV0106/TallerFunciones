const arrns = ['a', 1, 3, 'b', 2, 'c'];
function ordenadora(arrns) {
    var arreglito = arrns;
    const arregloorganizado = [];
    arrns = arrns.filter(number => Number.isInteger(number));
    arreglito = arreglito.filter(string => !Number.isInteger(string));
    arrns.sort();
    arreglito.sort();
    arreglito.forEach(element => {
        arregloorganizado.push(element);
    });
    arrns.forEach(element => {
        arregloorganizado.push(element);
    });
    return arregloorganizado;
}
console.log(ordenadora(arrns));
