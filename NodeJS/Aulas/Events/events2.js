
//importa util (nativo) e extrai classe inherits
//aqui poderia só usar require sem extrair nada
const {inherits} = require('util')
//importa events (nativo) e extrai classe EventEmitter
const {EventEmitter} = require('events')

//Definindo objeto do tipo Character
//que terá nome como atributo
function Character(name) {
    this.name = name
}

//aqui está atribuindo a Character as
//funcionalidades de EventEmitter
//(Character) agora pode criar, monitorar e disparar eventos
//obs: caso não extraísse nada lá encima, aqui ficaria 'util.inherits'
inherits(Character, EventEmitter)

//criando primeiro objeto
const chapolin = new Character('chapolin')

//evento criado, iniciado monitoração e definindo ação a ser realizada
chapolin.on('help', ()=> console.log(`Eu, o ${chapolin.name} colorado`))

console.log('fudeu, quem nos salvará agora?')

//disparando evento 'help'
chapolin.emit('help')
