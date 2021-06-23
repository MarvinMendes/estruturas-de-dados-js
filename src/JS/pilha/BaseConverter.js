/*
essa função converte um número qualquer para uma base 
seja hexadecimal, binária, octal...
o primeiro parâmetro é o número a se converter o segundo a base para a conversão
*/

function baseConverter(number, base) {

    var empilha = []
    var resto
    var desempilha = ''
    var digits = '0123456789ABCDEF'

    while (number > 0) {
        resto = Math.floor(number % base)
        empilha.push(resto)
        number = Math.floor(number / base)
    }

    while (empilha.length > 0) {
        desempilha += digits[empilha.pop()]
    }

    return desempilha
}

console.log(baseConverter(123, 16))
