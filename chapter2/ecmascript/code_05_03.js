function add_03 () {
    const judge = true;
    const a = 10;

    if (judge) {
        const b = 100;
    }

    return a + b; // エラー：bが定義されていないため
}

console.log(add_03());