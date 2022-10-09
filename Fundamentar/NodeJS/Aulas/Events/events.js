//importa events (nativo) e extrai classe EventEmitter
const {EventEmitter} = require('events')

//criar objeto tipo EventEmitter
const event = new EventEmitter()

//ativa evento (começa a ser monitorado)
event.on('saySomethingCool', (message) => {
    console.log('i hear you,', message)
})

//emite evento
event.emit('saySomethingCool', 'Lega')
event.emit('saySomethingCool', 'Lega')