/*
crie 2 arquivos js
o primeiro (esse) exportará uma função getFlag() que recebe
um argumento tipo string
Essa função deve buscar no array process.argv a flag e retornar seu valor

O segundo arquivo irá importar a função e passar a flag desejada

Será rodado no terminal o segundo arquivo passando flags --name e 
--greeting para ser impresso no terminal
*/



function getFlag(flag) {
    const requstedFlag = process.argv.indexOf(flag) + 1
    return process.argv[requstedFlag]
}

//exportando função para ser utilizada em outro arquivo
module.exports = getFlag;