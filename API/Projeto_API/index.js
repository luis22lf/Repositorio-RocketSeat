//ESTUDO DOS VERBOS HTTP

const express = require('express')

const app = express()

app.listen('3000')

//get
//app.route('/').get((req,res) => res.send("ola"))

//midleware (avisa que vai usar json)
app.use(express.json()) //usa express na forma crua (sem ser 'app.')


//post
//app.route('/').post((req,res) => console.log(req.body))  //mostra conteudo enviado
//app.route('/').post((req,res) => res.send(req.body))  //envia conteúdo

//let author = "lega"
/*
app.route('/').get((req,res) => res.send(author))
//put (editar informações)
app.route('/').put((req, res) => {
    author = req.body.author
    res.send(author)
})
*/

//Delete
/*app.route('/:identificador').delete((req,res) => {//':' indica que 'identificador' é uma variável
    res.send(req.params.identificador) //req.params permite acessar variável passadas na rota
})*/


// -----------------------------------------------------------------------------


//Route params
/*
app.route('/').get((req,res) => res.send("ola"))
app.route('/:variavel').get((req,res) => res.send(req.params.variavel))
app.route('/identidade/:nome').get((req,res) => res.send(req.params.nome))
*/

//-------------------------------------------------------------------------------

//Query params
app.route('/').get((req,res) => res.send(req.query))//mostra todos os query (dados) encontrados na url
//app.route('/').get((req,res) => res.send(req.query.nome))//mostra somento o nome