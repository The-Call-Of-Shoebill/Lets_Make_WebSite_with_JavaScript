let add_1 = (a, b) => { return a + b; } // アロー関数

function add_2(a, b) { // 関数宣言
    return a + b;
}

let add_3 = function(a, b) { return a + b; } // 関数リテラル

console.log(add_1(5, 2));   // 7
console.log(add_2(5, 2));   // 7
console.log(add_3(5, 2));   // 7
