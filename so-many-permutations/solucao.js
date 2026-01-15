function randomNumber(arrWords) {
  let i = parseInt(Math.random() * arrWords.length);
  return i;
}

function permutations(string) {
  let arrWords = string.split("");
  let newArr = arrWords;
  for (let indice = 0; indice < arrWords.length; indice++) {
    let i = randomNumber(arrWords)
    newArr[i] = 'bcijsb'
  }
  console.log(newArr);
}

permutations("ab"); // ['ab', 'ba']
