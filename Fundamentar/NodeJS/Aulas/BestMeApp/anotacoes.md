## process.stdout.write
- stdout: saída padrão (console.log por baixo dos panos usa esse comando com \n no final pra escrever)
- write: escreve de fato algo

## process.stdin.on("data", data => {...})
- stdin: entrada
- on: aguarda evento
- data: dados de entrada
- aguarda uma entrada e ao recebe-la executa uma funcao

## process.exit()
- finaliza processo (ao usar stdin.on, fica aguardando sempre uma resposta sem finalizar o programa)

## .push
adiciona elemnto à algum lugar

## process.on
- aguarda algum estado no processo (ex: process.on('exit', () => {...}) monita encerramento do programa e quando ocorre executa uma função)