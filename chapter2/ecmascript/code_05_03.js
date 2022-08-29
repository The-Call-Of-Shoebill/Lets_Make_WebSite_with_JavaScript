function add_03 () {
    const pass = true;
    const a = 10;

    if (pass) {
        const b = 100;
    }

    return a + b; // エラー：bが定義されていないため
}

console.log(add_03());