//ORIENTAÇÃO A OBJETO

//OBJETOS
/*
? Todo objeto possui:
? propriedades e funcionalidades
? estado e comportamento
? atributos e métodos
*/
//----------------------------------------------------------

//CLASSES
/*
? Funcionam como um molde para os objetos.
? Objetos são criados a partir de uma classe e muitos podem
? ser feitos pela mesma classe
*/
//----------------------------------------------------------

//INSTANCIA
//? objeto criado a partir de uma classe (instanciar objeto para herdar a classe)


//----------------------------------------------------------
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }
    //chama a função
    //get cria pseudo-propriedade tanto que, para chamar função, usa-se .area
    //usado quando queremos executar uma função ao chamar tal propriedade 
    get area() { //cria atributo area para o objeto
        return this.#calculaArea()
    }
    // função privada, somente get area pode acessar ela
    #calculaArea() {
        return this.altura * this.largura
    }
}
// o '#' indica que a função não pode ser acessada de fora da classe

let poligno = new Poligono(50,60)
console.log(poligno.area)
//----------------------------------------------------------

//HERANÇA
/*
? pais e filhos
? objetos podem herdar ou estender características bases
? uma cópia de atributos e métodos de outra classe
*/

class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {//?precisa usar construtor
        super() //puxar atributos e métodos do pai
        this.rodas = 2
    }
}
//----------------------------------------------------------

//POLIMORFISMO
/*
?Quando um objeto estende de outro (herança) pode haver a necessidade
?de reescrever uma ou mais características (atributos e métodos) nesse objeto

?polimorfismo significa muitas formas
*/

class Atleta {
    peso
    categoria

    constructor(peso){
        this.peso = peso
    }

    definirCategoria() {
        if (this.peso <= 50) {
            this.categoria = "infantil"
        }
        else if (this.peso <= 65) {
            this.categoria = "juvenil"
        }
        else
            this.categoria = "adulto"
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso) //puxando atributo da classe pai
    }
    //remodelando para classe Lutador (polimorfismo)
    definirCategoria() {
        if (this.peso <= 54)
            this.categoria = 'pluma'
        else if (this.peso <= 60)
            this.categoria = 'leve'
        else if (this.peso <= 75)
            this.categoria = 'meio-leve'
        else    
        this.categoria = 'pesado'
    }
}
//----------------------------------------------------------

//ABSTRAÇÂO
/*
?template ou identidade que será construida no futuro

?métodos e atributos podem ser criados na classe de
?abstração (superclasse)
?A implementação dos métodos e atributos só pode ser feito
?na classe que herdará a abstração
*/

class Parafuso {//superclasse abstrata
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instanciada')
    }       
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}
//tentar chamar métido tipo ou criar objeto tipo Parafuso gerará erro pois
//essa classe apenas serve para outras herdarem seu conteúdo

class Fenda extends Parafuso {
    constructor() {super()}

    get tipo() {
        return 'fenda'
    }
}