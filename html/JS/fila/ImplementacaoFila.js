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

