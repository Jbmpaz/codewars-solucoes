function somar(arrayMaior, arrayIgualOuMaior) {
  let i = 0;
  let varTemp = 0;
  let arrayTemp = [];

  arrayMaior.forEach((element, indice, arrayM) => {
    if (arrayIgualOuMaior[i] == undefined) {
      arrayIgualOuMaior[i] = 0;
    }

    let somaDosElemetos = element + arrayIgualOuMaior[i] + varTemp;
    varTemp = 0;

    if (indice != arrayM.length - 1) {
      if (somaDosElemetos > 9) {
        let arrayTemp2 = separarEmArray(somaDosElemetos.toString());
        somaDosElemetos = arrayTemp2[0];
        varTemp = arrayTemp2[1];
      }
    }

    if (indice == arrayM.length - 1) {
      somaDosElemetos += varTemp;
      if (somaDosElemetos != 0) {
        arrayTemp.unshift(somaDosElemetos);
      }
    } else {
      arrayTemp.unshift(somaDosElemetos);
    }

    i++;
  });

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

sumStrings('123','456'); // 579
sumStrings('8797', '45'); // 8842
sumStrings("800", "9567"); // 10367
sumStrings("00103", "08567"); // 8670
