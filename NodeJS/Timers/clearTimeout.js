const timeOut = 3000
const finished = () => console.log('done')

// cancela um timeOut (se não atingiu tempo programado para executar até comando de clear, não executa mais)
let timer = setTimeout(finished, timeOut)
clearTimeout(timer)