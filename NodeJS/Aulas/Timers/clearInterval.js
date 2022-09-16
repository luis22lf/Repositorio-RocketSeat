const timeOut = 1000
const finished = () => console.log('done')

// executa função a cada x milisegundos
let interval = setInterval(finished, timeOut)

// após 3s executa 1x função para interromper setInterval
//(foi necessário usar arrow function pois alegava erro que primeiro argumento precisa ser uma função)
setTimeout (() => clearInterval(interval), 3000)