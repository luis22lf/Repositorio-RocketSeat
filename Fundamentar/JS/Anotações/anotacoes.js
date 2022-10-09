//TIPOS DE DADOS
    //String
        /*
        Em js string pode ser usado  através de "", '' ou ``
        as crases (``), permitem quebra de linha e utilizar expressões 
        com caracteres ${} ex: console.log(A soma de duas unidades é ${1+1})
        */

    //Number
        /*
        Inteiros 55
        float 5.5
        NaN (not a number) ex:(12 / "asd")
        Infinity (infinito)
        */

    //Bolean
        /*
        true / false
        */

    //Undefined / Null
        /*
        null - nulo, objeto sem valor
        undefined - indefinido (não existe)
        */

    //OBJETOS
        /*
        objetos tem atributos e métodos
        para criar um objeto, usa-se chaves ex:{propriedade: "valor"}
        console.log({
        name:"Lega",
        age: 24,
        funcao: function(){
            console.log("sarrar");
            }
        });
        */

    //Array
        /*
        para o array, usa-se colchetes ex[item1, item2...]
        console.log(["batata", 44, true]);
        */

//VARIAVEIS
    /*
    Tipos:
        var (variavel global, dá pra usar e declarar depois (hoisting))
        let
        const
    as variáveis são dinâmicas, podem começar carregando um tipo e esse tipo mudar
    ex: var clima = "quente";
        clima = true;
    */
  

//PRINTANDO VARIAVEIS
        var nome ='lega', idade=24;
        console.log(`o ${nome} tem ${idade} anos`);
        console.log("o "+ nome + " tem " + idade + " anos");

//Acessando valores de um objeto
        let person ={
            name:'lega',
            age:24
        }
        console.log(person)
        console.log(person.name)


//FUNÇÕES
    //criar função
        function NomeFuncao(){
            console.log('aqui é uma função');
        }
    //chamar função
        NomeFuncao();

    //Arrow function (forma simplificada de escrever função)
    //forma normal:
    const Funcao = function NomeFuncao() {}
    //arrow function:
    const Funcao2 = () => {}

    //Callback function (função dentro de uma função)
    function sayMyName (name) {//cria função e envia outra como parametro
        name();
    }

    sayMyName (//chamando função definindo função name
        () => {
            console.log('estou numa callback');
        }
    )

    //FUNÇÃO CONSTRUTORA (outra forma de criar objetos)
    function Person(name) {
        this.name = name;
        this.walk = () => {
            return this.name + "está andando";
        }
    }
    const lega = new Person('luis');
    const veve = new Person('vevê');
    console.log(lega.walk());
    console.log(veve.walk());



    //Type coersion (JS vai forçar uma conversão para tenter executar a operação)
console.log('9'+5) //vai transformar 5 em string e concatenar com 9

//Type conversion (Converter tipo de dado em outro tipo)
console.log(Number('9') + 5) //tranforma string 9 em número e realiza a soma
let string = '123'
console.log(Number(string))//converte string em número
let number = 321
console.log(String(number)) //converte numero em string




//PROTOTYPE
    //Prototype (funções que estão atreladas às variáveis criadas)
    let word = 'paralelepipedo'
    console.log(word.length) //retorna tamanho da string
    let number2 = 123
    console.log(String(number2).length) //converte em string e retorna tamanho (número não tem acesso a função length)
    let number3 = 123.123456
    console.log(number.toFixed(2).replace(".",",")) //fixa em 2 casas decimais e substitui . por , (como numero não tem virgula, acaba virando uma string)
    console.log(word.toUpperCase()) //transforma todas as letras em maiusculo
    console.log(word.toLowerCase()) //transforma todas as letras em minusculo

    //separa um texto que tem espaços em um novo array onde cada palavra é uma posição e depois transforma em um texto em que onde eram espaços contém _
    let phrase = "Eu quero viver o amor!"
    let myArray0 = phrase.split(" ") //split vai particionar a string toda vez que encontrar um caractere específico (espaço no caso)
    let phraseWithUnderscore = myArray.join("_") //join vai unir todas as posições do array e adicionar um _ ao fim de cada posição

    console.log(phrase.includes('amor')) //verifica se na string tem uma palavra específica (é case sensitive)

    //Criando array com construtor
    let myArray = new Array(10) //cira um array vazio de 10 posições
    let myArray2 = new Array('a','b','c') //cria um array com a,b,c

    //transforma uma cadeia de caracteres em elementos de um array
    let word2 = 'manipulacao'
    console.log(Array.from(word2))

    let techs = ['html','css','js']
    //adiciona um item no fim do array
    console.log(techs.push('nodejs'))
    //adiciona um item no começo do array
    console.log(techs.unshift('sql'))
    //remove ultimo item do array
    techs.pop()
    //remove primeiro item do array
    techs.shift()
    //pega somente alguns elementos do array
    console.log(techs.slice(1,3)) //inicia a partir da posição 1 e vai até posição 3
    //remover 1 ou mais itens em qualquer posição
    techs.splice(1,2) //remove 2 itens a partir do indice 1
    //encontrar a posição de um elemento
    let index = techs.indexOf('css')

    //Criar um objeto (new)
    let name = new  String('legalize')

    //Deletar atributo de um objeto
    const person1 = {
    name: 'lega',
    age: 24
    }
    delete person1.age
    console.log(person)


//if else
    //é possível usar condições no valor das variáveis
let temperature = 36.9
let highTemperature = temperature >= 37.5 //cria uma boleana, se temperature for maior ou igual 37,5 é true
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Febre alta')
} else if(mediumTemperature) {
    console.log('Febre moderada')
} else {
    console.log('Saudável')
}


//THROW e TRY CATCH
function sayMyName(name) {
    if (name === '') {
        throw 'Nome é obrigatório'  //throw interrompe a função (se não tiver catch para capturar o erro (throw) interrompe todo o código)
    }

    console.log(name)
}

try {   //executa a função
    sayMyName('lega')
} catch(e) {    //se identificar algum erro (throw), executa comando
    console.log(e)
}

console.log('após ao try/catch')

//Break e Continue
for (let cont = 10; cont >=0; cont--)
{
    if (cont == 5)
        //break     //interrompe for
        //continue  //pula somente a execução atual (cont = 5)
    console.log(cont)
}

//FOR OF
let name1 = "luis"
let names = ["luis", "lega", "legalize"]
    //cria um for que se repete uma vez para cada elemento posição contido em names (3), ao usar name1 executa 4x 
    //(uma para cada caractere)
for (let name of names) {//cada loop a variavel name pega valor da posição atual da variavel
    console.log(name)
}

//FOR IN
let person2 = {
    name: 'lega',
    age: 24,
    weight: 66
}
    //executa uma vez para cada atributo de um objeto
for (let property in person2) {
    console.log(property)
    console.log(person2[property])
}