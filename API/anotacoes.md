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