function somar(arrayMaior, arrayIgualOuMaior) {
  // console.log(arrayMaior)
  // console.log(arrayIgualOuMaior)

  let i = 0;
  let varTemp = 0;
  let arrayTemp = [];

  arrayMaior.forEach((element, indice, arrayMaior) => {
    if (arrayIgualOuMaior[i] == undefined) {
      arrayIgualOuMaior[i] = 0;
    }

    let somaDosElemetos = element + arrayIgualOuMaior[i];
    if (somaDosElemetos > 9) {
      let arrayTemp = separarEmArray(somaDosElemetos.toString());
    //   console.log(arrayTemp)
      somaDosElemetos = arrayTemp[arrayTemp.length - 1]
      varTemp = arrayTemp[0]
    }

    if (indice == arrayMaior.length - 1 && varTemp != 0) {
        somaDosElemetos = varTemp
    }

    arrayTemp.unshift(somaDosElemetos);
    i++;
  });

  // console.log(arrayTemp);
  return arrayTemp;
}

function separarEmArray(num) {
  let arrayNum = num.split("");
  let arrayInvertido = [];

  for (const elemento of arrayNum) {
    arrayInvertido.unshift(Number(elemento));
  }
  return arrayInvertido;
}

function sumStrings(a, b) {
  let arrayA = separarEmArray(a);
  let arrayB = separarEmArray(b);
  let arrayResult = [];
  let variavelResult = "";

  if (arrayA.length >= arrayB.length) {
    arrayResult = somar(arrayA, arrayB);
  } else {
    arrayResult = somar(arrayB, arrayA);
  }

  for (const valor of arrayResult) {
    variavelResult += valor.toString();
    // console.log(variavelResult)
  }
  console.log(variavelResult);
  return variavelResult;
}

// sumStrings('123','456');
sumStrings('8797', '45');
// sumStrings("800", "9567");
// sumStrings("8", "9");

