function solution(str){
    let arr = str.split('') // Separa em um Array
    arr.length % 2 != 0 ? arr.push('_') : arr // Verifica se é par ou impar
    let newArr = [] // Cria um Array vazio
    for (let i = 0; i < arr.length; i += 2) { // Loop que pula de 2 em 2
        newArr.push(arr[i] + arr[i + 1]) // Adiciona os valores de acordo com o indice
    }
    console.log(newArr)
    return newArr
}

solution("abcdef") // ["ab", "cd", "ef"]
solution("abcdefg") // ["ab", "cd", "ef", "g_"]
solution("") // []