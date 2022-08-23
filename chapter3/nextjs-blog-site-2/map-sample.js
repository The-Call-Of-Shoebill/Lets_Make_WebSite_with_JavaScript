const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

const result = items.map( (value) => {
    //配列の各要素を合計していく
    sum = sum + value;
    return sum;
});

console.log( result );
