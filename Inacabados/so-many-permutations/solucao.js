function imbaralhar(arr) {
  let largura = arr.length - 1;
  let casaParaPular = largura - 1;
  for (let i = 0; i < largura; i++) {
    let numNext = i + casaParaPular;
    if (numNext > largura) {
      numNext -= largura;
    }

    let first = arr[i];
    let next = arr[numNext];

    // if (i == largura) {
    //   next = arr[0];
    // }

    arr[i] = next;
    arr[numNext] = first;
  }
  // console.log(arr)
  return arr;
}

function permutations(string) {
  let arrString = string.split("");

  const arr = new Set();

  let largArr = arrString.length;
  let valor = 1;
  let i2 = 1
  for (let i = largArr; i > 1; i--) {
    i2--
    valor *= largArr + i2
    // console.log(valor)
  }
  // console.log(valor)

  for (let i = 0; i < valor; i++) {
    let temp = imbaralhar(arrString).join("");
    arr.add(temp);
    // console.log(imbaralhar(arrString))
  }

  let newArr = [...arr];
  console.log(newArr);
  return newArr;
}

// permutations("aabb");
// permutations("hpevxr");
permutations("wiqxzn");
