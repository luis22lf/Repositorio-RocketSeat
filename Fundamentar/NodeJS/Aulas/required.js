//? Módulos nativos

//require é usado para chamar módulos nativos/criados/instalados dentro do arquivo

const path = require('path') //path é um módulo nativo do node (https://nodejs.org/api/path.html)
console.log(path.basename(__filename))



//? Meus módulos
const myModule = require('./exports')   //equivalente ao import em C
console.log(myModule)