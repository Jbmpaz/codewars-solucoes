const alfabeto = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
    "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
]

function rot13(message) {
    //your code here
    let aarayPalavra = message.split('')
    let num = 0
    let palavraOrganizada = ""

    for (let word of aarayPalavra) {
        
        // console.log(word)
        let wordS = word.toLowerCase()
        
        if (alfabeto.includes(wordS)) {
            num = alfabeto.indexOf(wordS) + 13
            if (num > 25) {
                num -= 26
            }
            // console.log(word)
            if (wordS.toUpperCase() == word) {
                palavraOrganizada += alfabeto[num].toUpperCase()
            } else {
                palavraOrganizada += alfabeto[num]
            }
            if (!alfabeto.includes(wordS)) {
                palavraOrganizada += word
            }
        }

    }
    console.log(palavraOrganizada)
    return palavraOrganizada
}

rot13("test")
rot13("Test")
rot13("Pbqrjnef")
rot13("}aryo$wM0")
rot13("Ruby is cool!")
