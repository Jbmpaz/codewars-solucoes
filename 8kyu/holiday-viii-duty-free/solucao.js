function dutyFree(normPrice, discount, hol){
    discount /= 100
    let economizado = normPrice * discount
    let valor = parseInt(hol / economizado)
    console.log(valor)
    return valor
}

dutyFree(12, 50, 1000)
dutyFree(17, 10, 500)
dutyFree(24, 35, 3000)