function add_02 () {
    let pass = true;
    let a = 10;

    if (pass) {
        let b = 100;
    }

    return a + b; // エラー：bが定義されていないため
}

console.log(add_02());