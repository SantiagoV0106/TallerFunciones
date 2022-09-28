const divider = (a) => {
    const result = { impares: [], pares: [] };
    a.forEach((n) => {
        if (Number(n) % 2 == 0) {
            result.pares.push(n);
        }
        else {
            result.impares.push(n);
        }
    });
    return result;
};
