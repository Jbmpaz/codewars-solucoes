function narcissistic(value) {
    // Code me to return true or false
    let numString = value.toString()
    let numSeparado = numString.split('')
    //   console.log(numString)
    let tamanho = numSeparado.length
    let valor = 0
    for (const numero of numSeparado) {
        valor += numero ** tamanho
    }
    valor = Number(valor)
    // console.log(valor)
    if (valor == value) {
        return true
    } else {
        return false
    }
}