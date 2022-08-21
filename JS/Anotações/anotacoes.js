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