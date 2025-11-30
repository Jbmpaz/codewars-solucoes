function order(words) {
    // ...

    let palavraSeparada = words.split(' ')
    // console.log(palavraSeparada)
    let fraseOrganizada = ""

    palavraSeparada.forEach((elemento) => {

        for (let i = 1; i <= palavraSeparada.length; i++) {

            let indice = i.toString()
            
            let verificacao = elemento.includes(indice)

            // console.log(verificacao)

            if (verificacao) {
                fraseOrganizada += `${palavraSeparada[i - 1]} `
            }
        }
    });
    console.log(fraseOrganizada)
    return fraseOrganizada
}

order("is2 Thi1s T4est 3a")
order("4of Fo1r pe6ople g3ood th5e the2")
order("")