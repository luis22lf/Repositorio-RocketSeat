/*
crie 2 arquivos js
o primeiro exportará uma função getFlag() que recebe
um argumento tipo string
Essa função deve buscar no arry process.argv a flag e retornar seu valor

O segundo arquivo (esse) irá importar a função e passar a flag desejada

Será rodado no terminal o segundo arquivo passando flags --name e 
--greeting para ser impresso no terminal
*/

const getFlag = require('./getFlag')


console.log(`olá ${getFlag('--name')}, ${getFlag('--greeting')}`)
