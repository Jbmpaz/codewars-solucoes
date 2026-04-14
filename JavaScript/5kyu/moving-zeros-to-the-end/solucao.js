function moveZeros(arr) {
  let arrayTemporario = [];
  let arrayFinal = [];

  for (const elemento of arr) {
    if (elemento !== 0) {
      arrayFinal.push(elemento);
    } else {
      arrayTemporario.push(elemento);
    }
  }

  for (const elemento of arrayTemporario) {
    arrayFinal.push(elemento);
  }

  console.log(arrayFinal)
  return arrayFinal;
}

moveZeros([1,2,0,1,0,1,0,3,0,1])
moveZeros(["a", "b", null, "c", "d", 1, 1, 3, 1, 9, {}, 9, +0, +0, +0, false, +0, +0, [], +0, +0, +0, +0, +0]);
