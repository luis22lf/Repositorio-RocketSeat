Assíncrono seria várias tarefas sendo executadas simultaneamente. Por padrão JS trabalha síncrono mas há como trabalhar de forma assincrona.

### Callback
função que é passada como argumento de outra função e depois de algum tempo ela é chamada de volta.

### setTimeout
setTimeout() é uma função que recebe como argumento uma outra função e um tempo para ser executada.

    // setTimeout(function, delay)
    setTimeout(function () {
        console.log('depois de 1s')  
    }, 1000)

A função de argumento do setTimeout é uma callback, ela vai executar depois de um certo tempo. No caso do exemplo acima, a função vai ser executada depois de 1000ms que é o mesmo que 1s.



### Conectando API com HTTPS e Callback
    const https = require('http')
    const API = 'http://jsonplaceholder.typicode.com/users?_limit=2'

    https.get(API, res => {
        console.log(res.statusCode)
    })

    console.log('conectando API')

-------------------------------------------------------------------------------------

## Promises
É um objeto JavaScript com a promessa de que algo será realizado<br>
É usado para operações assíncronas<br>
Não bloqueia outras operações<br>
Essa promessa não significa que vai dar certo ou que vai dar errado.

Uma promessa poderá ser:

    - Pending: Estado inicial, assim que o objeto da promessa é iniciado
    - Fulfilled: A promessa foi concluída com sucesso
    - Rejected: A promessa foi rejeitada, houve um erro
    - Settled: Seja com sucesso ou erro, ela foi finalmente concluída


    // Promessa retorna com sucesso
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        return resolve('carro chegou')
    })

    console.log('aguardando')

    promessa.then(result => console.log(result))

    ------------------------------------------------

    // Promessa é rejeitada e usamos o catch() para capturar o erro
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
        .then(result => console.log(result))
        .catch(erro => console.log(erro))
    
    ---------------------------------------------------

    let aceitar = true
    console.log('pedir uber') 
    const promessa = new Promise((resolve, reject) => {
        if (aceitar) {
            return resolve('pedido aceito!')
        }

        return reject('pedido negado!')
    })

    console.log('aguardando')

    promessa
        .then(result => console.log(result))
        .catch(erro => console.log(erro))
        .finally(() => console.log('finalizada'))


### Promise com fetch
fetch (pegar)

    //exemplo de encadeamento de promessas
    fetch('https://api.github.com/users/maykbrito') //pega API
    .then(response => response.json()) //primeira promessa
    .then(data => fetch(data.repos_url)) //segunda promessa
    .then(res => res.json()) //terceira promessa
    .then(d => console.log(d)) //quarta promessa
    .catch(error => console.log('erro')) //caso erro em alguma promessa