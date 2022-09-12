const timeOut = 3000
const finished = () => console.log('done')

//executa função após x milisegundos
setTimeout(finished, timeOut)
console.log('mostrar assincronismo')