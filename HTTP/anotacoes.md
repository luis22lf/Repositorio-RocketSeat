Para estudo dos métodos foi necessário efetuar os seguintes passos:
npm install -g json-server, depois do comando terminar, crie um diretório chamado http-course e entre nele, copie as linhas de código:
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

json-server --watch db.json     (inicia servidor)


## METODOS
métodos podem ter 2 características, seguro e idempotente. Métodos seguros não alteram o servidor, são de apenas leitura, então não apresentam carga extra para o servidor e são mantidos seguros por ele, métodos considerados seguros são: GET, HEAD e OPTIONS. Os métodos Idempotentes são os métodos que não mudam de resposta, por isso a parte de "idem" no nome, mas podem ter status codes diferentes os métodos idempotentes são todos os métodos seguros, PUT e DELETE.


### OPTIONS
irá nos dar informações sobre a disponibilidade de métodos da requisição. Ele é um método seguro, pois não faz alteração alguma, e é idempotente, pois sempre retornará a mesma coisa para a mesma requisição, o OPTIONS não manda nem recebe um Body, não é usado em formulários e nem é cacheable.

<code>curl -X OPTIONS http://localhost:3000/posts -i</code> (mostra métodos disponíveis para usar)


### GET
serve para pegar um recurso, ou seja, só pode receber dados. Ele é um método seguro e idempotente, que não pode enviar um Body no request, mas pode receber no response, ele também pode ser cacheable e é usado em alguns formulários.

<code>curl -v http://localhost:3000/posts </code>
<code>curl -v http://localhost:3000/posts\?q\=json </code>


### HEAD
semelhante ao GET, porém é recebido somente o cabeçalho. Ele é um método seguro e idempotente, não tem Body nem no envio nem na resposta, não é usado em formulários e é cacheable.

<code>curl -I http://localhost:3000/posts </code>



### POST (cria)
serve para publicar ou cadastrar um recurso. Ele não é seguro nem idempotente, pois muda informações no servidor e não receberá a mesma resposta de uma mesma requisição, o verbo POST tem Body tanto na requisição quanto na resposta, pode ser usado em formulários e é cacheable.

<code>curl -d '{"id": 2, "title": "json-server-2", "author": "lega"}' -H "Content-type: application/json" -X POST http://localhost:3000/posts</code>
-d => data (dados)
-H => cabeçalho
-X => método utilizado



### <strong> PUT (cria / modifica algo que já existe) </strong>
serve para criar ou atualizar um recurso, porém, diferentemente do POST é idempotente e normalmente usado para atualizar recursos. O status code de criação do PUT é 201, e o de atualização é o 204 ou 200. O verbo PUT não é seguro, pois altera dados no servidor, mas é idempotente, tem Body na requisição mas não na resposta e não é usado em formulários nem é cacheable.

<code>curl -d '{"name": "lega"}' -H "Content-type: application/json" -X PUT http://localhost:3000/profile</code>



### PATCH (modifica parcialmente)
serve para modificar parcialmente um recurso, diferentemente do PUT, que é usado para modificar o recurso inteiro. Ele não é um verbo seguro nem idempotente, e recebe um Body tanto na requisição quanto resposta, não é usado em formulários e não é cacheable.

<code>curl -d '{"title": "my-title"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1</code>



### DELETE
serve para remover um recurso, e pode ser respondido com o código 202, que não foi processado mas já foi aceito, 204, que significa que o recurso não existe e 200, que significa que o conteúdo foi deletado. Ele não é um método seguro, mas é idempotente, tem a possibilidade de receber Body tanto na requisição quanto na resposta, não é usado em formulários e não é cacheable.

<code>curl -X DELETE http://localhost:3000/posts/2</code>



## HEADERS
 série de informações adicionais para o pedido ou reposta e geralmente é estruturado da forma "nome: valor", por exemplo o Content-type: application/json.


## Status code
- 100 servem pra mostrar que a operação pode ser continuada sem problemas
- 200 em si, significa que tudo está ok (GET e POST)
- 201, significa que o recurso foi criado (PUT)
- 204, significa que não há conteúdo (PUT e DELETE)
- 301, significa movido permanentemente
- 308, significa redirecionamento permanente
- 302, significa uma mudança temporária assim como o 307
- 400, que significa que o pedido foi mal efetuado
- 401, que significa que o pedido não teve autorização
- 403, que significa que a autorização foi negada
- 404, que o pedido não foi encontrado
- 405, que significa que o método usado não é permitido
- 429, que significa que foram efetuados muitos pedidos
- 500, que significa que ocorreu um erro desconhecido no servidor
- 503, que significa que o servidor está indisponível no momento