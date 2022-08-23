const obj = {
    property1: "hello",
    property2: "world",

    say: function () {
        console.log(this.property1 + " " + this.property2);
    }
}

console.log(obj.property1);   // hello
console.log(obj.property2);   // world
obj.say();   // hello world