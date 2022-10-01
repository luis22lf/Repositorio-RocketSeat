//PILHA

//ultimo a entrar é o primeiro a sair

//definindo estrutura
class Stack {
    constructor() {
        this.data = []
        this.top = -1
    }
    //adiciona elemento (ao fim da pilha)
    push (value) {
        this.top++//incrementa indice
        this.data[this.top] = value //adiciona elemento
        return this.data
    }

    //elimina elemento (último da pilha)
    pop (value) {
        if (this.top < 0) return undefined //sem elementos retorna indefinido (não faz sentido tirar nada de nada)
        const poppedTop = this.data[this.top] //guarda valor a ser eliminado
        delete this.data[this.top] //elimina elemento da pilha
        this.top-- //reduz indice de elementos na pilha
        return poppedTop
    }

    //retorna elemento
    peek (value) {
        return this.top >= 0 ? this.data[this.top] : undefined
    }
}

//utilizando estrutura
const stack = new Stack()
//adicionando
stack.push('learning')
stack.push('fucking')
console.log(stack.push('working'))

console.log(stack.peek())

//removendo
stack.pop()
console.log(stack.pop())

console.log(stack.peek())