function Stack() {

    var items = []

    this.push = function(element){
        //adiciona um elemento na pilha
        items.push(element)
    }

    this.peek = function(){
        //devolve um elemento na pilha
        return items[items.length - 1]
    }

    this.pop = function(){
        //retira um elemento na pilha
        return items.pop()
    }

    this.isEmpty = function(){
        //verifica se a pilha está vazia
        return items.length === 0
    }

    this.clear = function(){
        //limpa todos os elementos da  pilha
        items = []
    }

    this.size = function(){
        //informa o tamanho da pilha
        return items.length
    }

    this.print = function(){
        //imprime a pilha no console
        console.log(items.toString())
    }
}

var pilha = new Stack()

pilha.push(2)
pilha.push(4)
pilha.push(6)
pilha.push(8)
pilha.push(10)

console.log(pilha.peek())

console.log(pilha.size())

pilha.print()

pilha.clear()
pilha.print()
console.log(pilha.isEmpty())




