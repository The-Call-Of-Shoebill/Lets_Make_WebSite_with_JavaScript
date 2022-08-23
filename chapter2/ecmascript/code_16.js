let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8]; 
let mergedArray = [...array1, ...array2];

console.log(array1);   // [ 1, 2, 3, 4 ]
console.log(array2);   // [ 5, 6, 7, 8 ]
console.log(mergedArray);   // [ 1, 2, 3, 4, 5, 6, 7, 8 ]