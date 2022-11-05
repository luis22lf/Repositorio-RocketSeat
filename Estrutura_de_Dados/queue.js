//QUEUE - FILA

//O primeiro a entrar é o primeiro a sair

//enqueue() - adiciona elemento ao final da fila
//dequeue() - remove primeiro elemento a entrar na fila


//modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item){
        this.data.push(item)
        console.log(`${item} entrou na fila`)
    }

    dequeue() {
        this.data.shift()
        console.log(`${item} saiu da fila`)
    }
}

//Utilizando
const fila = new Queue()

fila.enqueue('Marta')
fila.enqueue('Roberta')
fila.enqueue('Veronica')
fila.dequeue()
fila.dequeue()
fila.dequeue()