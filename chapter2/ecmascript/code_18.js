let obj1 = { a: 1, b: 2, c: 3};
let obj2 = { d: 4, e: 5, f: 6};
let mergedObj1 = {...obj1, ...obj2};
let mergedObj2 = {...obj1, g: 7};

console.log(mergedObj1);   // a: 1, b: 2, c: 3, d: 4, e: 5, f: 6
console.log(mergedObj2);   // a: 1, b: 2, c: 3, g: 7