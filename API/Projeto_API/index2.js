//ESTUDO DO CONSUMO DE UMA API

const express = require('express')
const axios = require('axios')//necessário para consumir API

const app = express()

app.listen('3000')

//midleware (avisa que vai usar json)
app.use(express.json()) //usa express na forma crua (sem ser 'app.')


app.route('/').get((req, res) => {
    axios.get('https://api.github.com/users/jakeliny')
    //exibe todos os dados
        //.then(result => res.send(result.data)) //resposta da url (dados) fica dentro do .data
    //exibe somente url do avatar
        //.then(result => res.send(result.data.avatar_url))
    //exibe a imagem contida na url do avatar
        .then(result => res.send(`<img src="${result.data.avatar_url}">`))
    .catch(error => console.error(error))
})
