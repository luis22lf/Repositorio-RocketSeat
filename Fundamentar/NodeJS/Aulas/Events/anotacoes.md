# Events

## EventEmitter
extrai classe EventEmitter e importa events que é nativo

<code>
const {EventEmitter} = require('events')
</code><br><br>

cria um objeto EventEmitter

<code>
const event = new EventEmitter()
</code><br><br>

## .on
ativa evento (começa a ser monitorado)
- necessário indicar evento a ser ativado e definir função (o que será feito quando ativo)

### (.on) Executa sempre que for disparado
<code>
event.on('saySomethingCool', (message) => {
    console.log('i hear you', message)
})
</code><br><br>

### (.once) Executa somente o primeiro disparado

<code>
event.once('saySomethingCool', (message) => {
    console.log('i hear you', message)
})
</code><br><br>

## .emit
dispara evento
- os parâmetros necessários são nome do evento e opcional enviar algum dado para a função (função no event.on)

<code>
event.emit('saySomethingCool', 'Lega')
</code><br><br>

-------------------------------
## Herdando do EventEmitter
importando biblioteca e extraindo classe

não é obrigatório extrair, mas nesse caso para usar inherits terá de usar util.inherits por exemplo

importando

<code>const {inherits} = require('util')

const {EventEmitter} = require('events')</code><br>

definindo objeto

<code>function Character(name) {

    this.name = name
}</code>

atribuindo recursor de EventEmitter a Character

<code>inherits(Character, EventEmitter)</code>

criando objeto

<code>const chapolin = new Character('chapolin')</code>

criando, monitorando e definindo ação do evento help

<code>chapolin.on('help', ()=> console.log(`Eu, o ${chapolin.name} colorado`))</code>

disparando evento

<code>chapolin.emit('help')</code>