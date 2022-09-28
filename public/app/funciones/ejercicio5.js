const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const commonarr = arr1.some(element => {
    return arr2.includes(element);
});
console.log(commonarr);
