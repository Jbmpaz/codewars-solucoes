function likes(names) {
    // TODO
    if (names.length != 0) {
        let quatidade = names.length
        switch (quatidade) {
            case 1:
                return `${names[0]} likes this`
                break
            case 2:
                return `${names[0]} and ${names[1]} like this`
                break
            case 3:
                return `${names[0]}, ${names[1]} and ${names[2]} like this`
                break
            default:
                return `${names[0]}, ${names[1]} and ${quatidade - 2} others like this`
                break
            
        }
    } else {
        return "no one likes this"
    }
}

likes([])
likes(['Peter'])
likes(['Jacob', 'Alex'])
likes(['Max', 'John', 'Mark'])
likes(['Alex', 'Jacob', 'Mark', 'Max'])