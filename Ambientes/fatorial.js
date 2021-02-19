function fatorial(n) {

    let fat = 1

    for (n; n>1; n--) {
        fat *= n
    } return fat
}

console.log(fatorial(5))