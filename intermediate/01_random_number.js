function random_num() {
    var n = Math.random();
    n = Math.floor(n * 5) + 1; //range 1-5
    return n
}

console.log(random_num())

