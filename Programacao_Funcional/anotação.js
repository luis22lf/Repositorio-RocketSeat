//?FUNÇÕES
/*
pequenas tarefas dentro de uma função
abstrair um problema e isolar dentro de uma função
não modificar dados fora dela
pequenas e específicas no que fazem
um dado(s) ENTRA em uma função e um NOVO DADO(S) SAI dela
não guarda estado 'stateless'
fácil manutenção, uso de testes e confiável
*/
//-----------------------------------------------------------

//?STATELESS
/*
não guarda estado
a função só conhece dados entregues a ela
a resposta não pode variar
*/
let number = 2
//statefull function (trabalha com dados externos)
function square() {
    return number*number
}
number = square()

//stateless function (trabalha só com dados entregues a ela)
const square = n => n*n
//-----------------------------------------------------------

//?FUNÇÕES INDEPENDENTES
/*
deve ter ao menos 1 argumento (não trabalhas com dados externos)
deve retornar algo (retorna o que é necessário e depois é destruida)
não utiliza loops, quando necessário usa-se recursão (função chama ela mesma)
*/
const random = (number, Math) => Math.floor(Math.random()*number)

//usando recursividade
const factorial = x => {
    //x = 0
    if(x === 0)
        return 1
    return x * factorial(x-1)
}
//-----------------------------------------------------------

//?FISRT-CLASS FUNCTION
/*
pode estar em qualquer lugar, inclussive como parametro de outra função
pode ser entendida como uma variável
*/
const sayMyName = () => console.log('lega')
const runFunction = fn => fn()

runFunction(sayMyName)
//-----------------------------------------------------------

HIGHER-ORDER
/*
funções que recebem outras como argumento
funções que retornam outras funções
*/
const numbers = [2, 4, 8, 16]
const square = n => n*n

const squareNumber = numbers.map(squre)

//exemplo de retorno com currying ou aplicação parcial de função
const pause = wait => fn => setTimeout(fn,wait)

pause(600) (() => console.log("waiting 600ms"))

const wait200 = pause(200)
constwait1000 = pause(1000)

wait200(() => console.log('waiting 200ms'))
wait1000(() => console.log('waiting 1000ms'))
//-----------------------------------------------------------

//?COMPOSIÇÃO de FUNÇÕES
/*
função que retorna um dado que vai para outra função
*/
const people = ['Lulu, Veve, Lega, Vivi']
const upperCasePeopleThatStartsWithL = 
people.filter(person => person.startsWith('L'))
.map(lperson => lperson.toUpperCase())