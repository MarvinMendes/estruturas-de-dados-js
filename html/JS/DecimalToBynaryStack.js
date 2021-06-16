function decimalParaBinario(decimalNumber) {
    var empilha = []
    var resto
    var desempilha = ''


    while (decimalNumber > 0) {
        
        resto = Math.floor(decimalNumber % 2)
        empilha.push(resto)
        decimalNumber = Math.floor(decimalNumber / 2)
    }

    while (empilha.length > 0) {
        desempilha += empilha.pop()
    }


    return desempilha
}

console.log(decimalParaBinario(25))
console.log(decimalParaBinario(23))
