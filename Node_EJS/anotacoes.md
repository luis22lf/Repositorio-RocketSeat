# Node EJS
usado para criar aplicações/servidor utilizando JS

## Procedimento para utilizar

### 1 Instalando bibliotecas e criando package
- npm init -y -> cria package.json
- npm i ejs -> instalar ejs
- npm i express -> para criar servidor

### 2 Criar arquivo server.js com seguinte código:
<code>
//express cria servidor para mostrar tudo que está sendo construído no navegador<br>
const express = require('express');<br>
const app = express() //instanciando express e guardando em app

// carrega express e define forma de restilização<br>
app.set("view engine", "ejs"); //passa como parametro ferramente para restilizar e nome da ferramenta

//cria rota<br>
app.get("/", function(req, res){ //res -> resposta<br>
    res.render("index"); //renderiza pagina (necessita estar dentro de uma pasta chamada views)<br>
})

//cria rota<br>
app.get("/sobre", function(req, res){<br>
    res.render("about");<br>
})

//rodar servidor<br>
//app carrega todo o express<br>
//listen vai escutar porta 8080<br>
app.listen(8080);<br>
console.log("rodando")
</code>

### 3 Jogar index.ejs dentro da pasta views

### 4 executar no terminal comando "node server" para rodar aplicação a partir do arquivo principal (server) e digitar
### "localhost:8080" no navegador (8080 é a porta escolhida, poderia ser outra)
----------------------------------------------------------
#### Caso tenha algum elemento que tenha interesse em reaproveitar em outro arquivo é possível criar um arquivo .ejs com esse elemento e onde quiser utilizá-lo basta inserir "<%- <%-include("NOME_DO_ARQUIVO") %>"



## Passando objeto para EJS
<%- include("../partials/header", {pagina: 'sobre'}); %>

### É possivel usar ejs, trocar para html e voltar a usar ejs novamente desde que use as tags para separar
<code>
<% qualitys.foreach(function(quality){ %>
                <li>
                    <strong><%=quality.title%></strong><%=quality.message%>
                </li>
            <% }) %>
</code>

- quando é usado '<%= ... %>' significa que é pra ser exibido o argumento 