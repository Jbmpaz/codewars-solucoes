function organizar(n) {
    let arr = n.toString().split("");
  let newArr = [];
  let maior = 0;
  for (let i = 0; i < arr.length; i++) {
    if (maior <= arr[i]) {
      maior = arr[i];
      newArr.unshift(maior);
    } else {
      newArr.push(arr[i]);
    }
  }

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < newArr[i + 1]) {
      let vTemp1 = newArr[i];
      let vTemp2 = newArr[i + 1];
      newArr[i] = vTemp2;
      newArr[i + 1] = vTemp1;
    }
  }
  // console.log(arr)
  // console.log(newArr);
  let numInteiro = "";
  for (const elemento of newArr) {
    numInteiro += elemento;
  }
  // console.log(numInteiro);
  return numInteiro;
}
function descendingOrder(n) {
  //...
  let nStr = n.toString()
  for (let i = 0; i < nStr.length; i++) {
    n = organizar(n);
  }
  console.log(n)
  return Number(n)
}

descendingOrder(0) // 0
descendingOrder(1) // 1
descendingOrder(111) // 111
descendingOrder(15) // 51
descendingOrder(10210); // 2110
descendingOrder(123456789) // 987654321
descendingOrder(3279477071); // 9777743210
descendingOrder(972401); // 974210
