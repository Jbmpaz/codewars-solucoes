const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function quicksum(packet) {
  // Code time :)
  let resultadadoDaLetraEValor = [];
  let reset = 0;
  for (const indi in packet) {
    let valorEncontradado = alfabeto.indexOf(packet[indi]);
    if (valorEncontradado != -1 || packet[indi] === " ") {
      let indice = Number(indi) + 1;
      let valor = valorEncontradado + 1;

      resultadadoDaLetraEValor.push(indice * valor);
    } else {
      reset = false;
    }
  }

  let contardor = 0;
  if (reset !== false) {
    for (const num of resultadadoDaLetraEValor) {
      contardor += num;
    }
  }

  console.log(contardor);
  return contardor;
}

quicksum("ACM"); // 46
quicksum("MID CENTRAL"); // 650
quicksum("BBC"); // 15
quicksum("???"); // 0
quicksum("axg "); // 0
quicksum("234 234 WEF ASDF AAA 554211 ???? "); // 0
quicksum("A C M"); // 75
