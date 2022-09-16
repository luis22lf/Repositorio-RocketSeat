# Timers
Uma forma de trabalhar com tempo no NodeJS
<br>

setTimeout(FUNCAO, TEMPO)
- executa comando após tempo determinado

clearTimeout(setTimeout(FUNCAO, TEMPO))
- cancela um timeOut (se não atingiu tempo programado para executar até comando de clear, não executa mais)

setInterval (FUNCAO, TEMPO)
- executa funcao após tempo determinado infinitamente em loop (igual setTimeout só que executa a cada x milisegundos)

clearInterval
- cancela setInterval registrado