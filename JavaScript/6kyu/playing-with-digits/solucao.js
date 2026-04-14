function digPow(n, p) {
    // ...
    let valorString = n.toString()
    let arrayVores = valorString.split('')
    //  console.log(arrayVores)
    let total = 0
    for (const elemento of arrayVores) {
        total += elemento ** p
        p++
        // console.log(total)
    }
    let resultadoDaDivisao = total / n

    if (Number.isInteger(resultadoDaDivisao)) {
        // console.log(resultadoDaDivisao)
        return resultadoDaDivisao
    } else {
        return -1
    }

}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 1))
console.log(digPow(46288, 1))