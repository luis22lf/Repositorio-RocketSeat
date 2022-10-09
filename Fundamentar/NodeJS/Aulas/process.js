//process é um objeto que possui todas as informações do processo que está rodando no momento

// console.log(process)

//? lista de argumentos rodando no node
// console.log(process.argv) 


const firtName = process.argv[2]
const lastName = process.argv[3]
console.log(`seu nome é ${firtName} ${lastName}`) //no terminar precisa executar node process e passar argumentos


//------------------------------------------------------------------------------------

//Passando flags como argumento
//(dentro do terminal)
// node process --name 'luis ferreira' --greeting 'suavidade?'