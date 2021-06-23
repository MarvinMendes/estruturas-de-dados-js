function priorityQueue() {
    var items = []

    function priorityQueueElement(elemento, prioridade) {
        this.elemento = elemento
        this.prioridade = prioridade
    }


    this.enqueue = (elemento, prioridade) => {
        var queue = new priorityQueueElement(elemento, prioridade)
        var adicionado = false

        for(let i = 0; i < items.length; i++) {
            if(queue.prioridade < items[i].prioridade) {
                items.splice(i, 0, queue)
                adicionado = true
                break
            }
        }
        if(!adicionado) {
            items.push(queue)
        }

    }


    this.dequeue = () => items.shift()


    this.print = () => {
        for(let i = 0; i < items.length; i++) {
            console.log(`${items[i].elemento} - ${items[i].prioridade}`)
        }
    }
}

var priority = new priorityQueue()
priority.enqueue('Ana', 2)
priority.enqueue('Kelvin', 1)
priority.enqueue('Maria', 1)

priority.print()