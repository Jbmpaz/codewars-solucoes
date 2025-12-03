function order(words) {

    // separar as palavras em Array
    let palavraSeparada = words.split(' ')

    // um array para armazenar na ordem certa
    let fraseParaOrganizar = []
    // uma variavel para deixar como uma frase e não como array
    let fraseOrganizada = ""

    // um loop para criar os indices do array
    for (palavra of palavraSeparada) {
        fraseParaOrganizar.push(palavra)
    }
    
    // um loop que passa em todos os elementos
    palavraSeparada.forEach((elemento) => {
        
        // um loop que busca o numero na palavra
        for (let i = 1; i <= palavraSeparada.length; i++) {
            
            // colocar True ou False dependendo se achar ou não
            let verificacao = elemento.includes(i)
            
            // se for True adiciona no array
            if (verificacao) {
                
                // adiciona no array no indice correto
                fraseParaOrganizar[i - 1] = `${elemento}`
                
            }
        }
    });

    // um loop para tirar do array e transformar em string
    for (const palavra of fraseParaOrganizar) {
        fraseOrganizada += `${palavra} `
    }

    console.log(fraseOrganizada)
    return fraseOrganizada.trim()
}

order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")