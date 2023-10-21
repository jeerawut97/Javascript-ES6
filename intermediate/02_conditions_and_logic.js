function random_num() {
    var n = Math.random();
    n = Math.floor(n * 5) + 1; //range 1-5
    return n
}

num = random_num()
if (num == 5) {
    console.log("Max.")
} else if (num <= 2) {
    console.log("Lte 2.")
} else if (num > 3) {
    console.log("Gt 3.")
} else {
    console.log('Something.')
}