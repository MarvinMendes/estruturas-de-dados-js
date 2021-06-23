function Queue() {
    var items = []

    this.enqueue = (item) => items.push(item)

    this.dequeue = () => items.shift()

    this.front = () => items[0]

    this.isEmpty = () => items.length === 0

    this.size = () => items.length

    this.print = () => console.log(items.toString())
}

var fila = new Queue()

fila.enqueue('Ana')
fila.enqueue('Kelvin')
fila.enqueue('Maria')

fila.print()

fila.dequeue()

fila.print()

console.log(fila.isEmpty())

console.log('Tamanho da fila = ' + fila.size())

console.log('Primeiro da fila ' + fila.front())


/*
    abaixo uma implementação de um jogo da batata quente

    o primeiro parâmetro é um array com os nomes dos jogadores
    o segundo o numero de jogadas
    eles trocarão de lugar 
    a cada jogada o primeiro da fila irá para o final da fila
    quem permanecer no início da fila ao final da rodada será eliminado
*/

const hotPotato = function(namesArray, rounds) {

    var queue = new Queue()

    for(let i = 0; i < namesArray.length; i++) {
        queue.enqueue(namesArray[i])
    }

    var eliminated = ''

    while (queue.size() > 1) {
        for(let i =0; i < rounds; i++) {
            queue.enqueue(queue.dequeue())
        }

        eliminated = queue.dequeue()
        console.log(eliminated + ' foi eliminado do jogo')
    }

    return queue.dequeue()

}
var nomes = ['Marvin', 'Ana', 'Kelvin', 'Marcelo', 'Tay']

var game = hotPotato(nomes, 7)

console.log('O jogo foi ganho por ' + game)
