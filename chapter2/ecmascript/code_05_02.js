function add_02 () {
    let judge = true;
    let a = 10;

    if (judge) {
        let b = 100;
    }

    return a + b; // エラー：bが定義されていないため
}

console.log(add_02());