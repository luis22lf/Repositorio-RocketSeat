#### 1 criar projeto node
    npm init -y

#### 2 instalando express
    npm i express

#### 3 criar e configurar arquivo index.js

    const express = require('express') //importa express

    const app = express()  //"inicializa express"

    app.listen('3000') //observa porta 3000

### GET
    app.route('/').get((req,res) => res.send("ola"))  //get usa o res para puxar conteudo

### POST
    //necessário utilizar insomnia
    //midleware (avisa que vai usar json)
    app.use(express.json()) //usa express na forma crua (sem ser 'app.')


    //post
    //app.route('/').post((req,res) => console.log(req.body))  //mostra conteudo enviado
    app.route('/').post((req,res) => res.send(req.body))  //envia conteúdo


### PUT
    edita informações já existentes
    necessário utilizar insomnia
    //necessário usar midleware (avisa que vai usar json)
    
    let author = "lega"
    //put (editar informações)
    app.route('/').put((req, res) => {
        author = req.body.author
        res.send(author)
    })


### DELETE
    exclui dados
    não recebe informação pelo req.body, recebe diretamente pela rota(url) que é salvo em req depois

    app.route('/:identificador').delete((req,res) => { //':' indica que 'identificador' é uma variável
    res.send(req.params.identificador) //
    })


----------------------------------------------------------------------------------

## PARAMETROS NAS REQUISIÇÕES

    app.route('/').get( (req, res) => res.send(req.query.name))

    app.route('/').put( (req, res) => res.send(req.body.author))

    app.route('/:parametro').get( (req, res) => res.send(req.params.parametro))


### BODY
- funciona com POST, PUT e PATCH
- Ao usar método diferente de GET, é necessário utilizar midleware

    //midleware
    app.use(express.json())

    app.route('/').post( (req, res) => {
        //forma de enviar vários dados
        const {nome, cidade} = req.body //variaveis necessitam ter mesmo nome que os campos JSON desejados
        res.send(`meu nome é ${nome} e sou de ${cidade}`)
    })


### ROUTE
sempre é necessário ter a rota principal '/'

    app.route('/').get((req,res) => res.send("ola"))
    app.route('/:variavel').get((req,res) => res.send(req.params.variavel))
    app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))


### QUERY (parametros atraves da url)
- com query a informação vem após o identificador interrogação (localhost:3000?nome=luis)
- enviando mais de uma informação: (localhost:3000?nome=luis&cidade=salto)





----------------------------------------------------------------------------------




## CONSUMINDO API COM NODEJS (axios)

- Para consumir, é necessário instalar o axios

        npm i axios

- exibindo dados

        app.route('/').get((req, res) => {
        axios.get('https://api.github.com/users/jakeliny')
        .then(result => res.send(result.data)) //resposta da url (dados) fica dentro do .data
        .catch(error => console.error(error))
        })

- exibindo um dado específico

        app.route('/').get((req, res) => {
        axios.get('https://api.github.com/users/jakeliny')
        //exibe somente url do avatar
        .then(result => res.send(result.data.avatar_url))
        .catch(error => console.error(error))
        })

- exibe uma imagem contida em uma url

        app.route('/').get((req, res) => {
        axios.get('https://api.github.com/users/jakeliny')
        //exibe somente url do avatar
        .then(result => res.send(`<img src="${result.data.avatar_url}">`))
        .catch(error => console.error(error))
        })


## API NO FRONT END COM FETCH

Fetch -> interface js para acerssar e manipular partes do pipeline HTTP

#### passo a passo:
    copiar arquivo contido em https://github.com/jakeliny/node-api-discover
    usar comando npm i
    usar comando npm start

### GET
    //salva link em variável p/ facilitar codigo
    const url = "http://localhost:5500/api"

    fetch(url) //link da API
    .then(response => response.json()) //pega conteudo e converte em json
    .then(data => renderApiResult.textContent = //.textContent para exibir apenas conteudo
     JSON.stringify(data)) // converte para json
    .catch(error => console.error(error))

### GET COM PARAMETROS
#### Necessário criar estrutura html com ids UserName, UserCity e UserAvatar
    fetch(`${url}/1`)
    .then(response => response.json())
    .then(data => {
        //preenche htm com dados da API
        UserName.textContent = data.name
        UserCity.textContent = data.city
        UserAvatar.src = data.avatar
    })
        
    .catch(error => console.error(error))


### POST
    function addUser() {
    fetch(url, { 
        method: "POST", //segundo parametro do fetch é o método usado (por padrão é get)
        body: JSON.stringify(newUser),//Recebe a informação que será enviada a url (json.stringfy converte em texto json)
        headers:{   //config padrão, procurar documentação do fetch explicando
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
    }

    const newUser = {
        name: "Cuca Beludo",
        avatar: "https://picsum.photos/200/300",
        city: "Scotch"
    }

    addUser(newUser)


### PUT
    //função do put
    function updateUser(updatedUser) {
        fetch(`${url}/1`, {
            method: 'PUT',
            body: JSON.stringify(updatedUser),
            headers:{   //config padrão, procurar documentação do fetch explicando
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => response.json())
        .then(data => alertApi.textContent = data)
        .catch(error => console.error(error))
    }

    //var do put
    const updatedUser = {
        name: "Jalin Rabey",
        avatar: "https://www.hypeness.com.br/1/2017/03/Bean3.jpg",
        city: "Boston"
    }

### Delete
    function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: 'DELETE', //Não é necessário enviar body pois não manda nada, apenas deleta
        headers:{   //config padrão, procurar documentação do fetch explicando
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
    }


## API com AXIOS
necessário utilizar no html:

\<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


### GET
    function getUsers() {
    axios.get(url)
    .then(Response => {
        apiResult.textContent = JSON.stringify(Response.data)
    })
    .catch(error => console.error(error))
    }


### PUT
    function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated)
    .then(response => console.log(response))
    .catch(error => console.error(error))
    }

### DELETE

    function deleteUser (id) {
    axios.delete(`${url}/${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))
    }