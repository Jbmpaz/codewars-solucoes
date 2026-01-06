function countBits(n) {
  // Program Me

  let bitNum = (n >>> 0).toString(2)
  let bitArray = bitNum.split('') 
  // console.log(bitArray)
  let apenasUm = bitArray.filter((numero) => {
    return numero == 1
  })
  // console.log(apenasUm)
  let soma = 0
  for (const num of apenasUm) {
    soma += Number(num)
  }
  console.log(soma)
  return soma
}

countBits(0)
countBits(4)
countBits(7)
countBits(9)
countBits(10)