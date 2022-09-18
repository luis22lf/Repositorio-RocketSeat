//express cria servidor para mostrar tudo que está sendo construído no navegador
const express = require('express');
const app = express() //instanciando express e guardando em app

// carrega express e define forma de restilização
app.set("view engine", "ejs"); //passa como parametro ferramente para restilizar e nome da ferramenta

//cria rota
app.get("/", function(req, res){ //res -> resposta
    const items = [
        {
            title: "D",
            message: "uro"
        },
        {
            title: "V",
            message: "eiudo"
        },
        {
            title: "P",
            message: "ulsante"
        },
        {
            title: "C",
            message: "abeçudo"
        }
    ];
    res.render("pages/index", {qualitys: items}); //renderiza pagina (necessita estar dentro de uma pasta chamada views)
})

//cria rota
app.get("/sobre", function(req, res){
    res.render("pages/about");
})

//rodar servidor
//app carrega todo o express
//listen vai escutar porta 8080
app.listen(8080);
console.log("rodando");