#### 1° Passo: Utilizar o vite e informar biblioteca (react)
    npm create vite@latest NomeDoApp --template react

#### 2° Passo: instalar e executar projeto
    npm i
    npm run dev



### Observações
    index chama um script que importa bibliotecas e um arquivo que retorna um html

    O arquivo html é uma função que retorna o html
    Ele só pode retornar um único dado, então, todo o html deve estar dentro de alguma tag como uma div ou tag vazia(<> </>)



### Separando CSS
    -cria-se um arquivo de css
    -usa-se import no index.jsx "import './styles.css'"
    -para criar as class usa-se "className"


#### Colocando fonte (em index.html)
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital@1&display=swap" rel="stylesheet">

    APLICA A FONTE NO CSS
        font-family: 'Roboto', sans-serif;

### COMPONENTES
    - criar um arquivo index.jsx numa pasta de componentes

    export function card() {
    return(
        <div>
            <strong>Jeremias Xampson</strong>
            <small>24:25:10</small>
        </div>
    )
    }

    - importar e chamar o componente no arquivo onde deseja usar


### PROPRIEDADES NOS COMPONENTES
    usado para fazer pequenas modificações em um componte já pronto

    ex (chamando componente): <Card name="Julio Balestrin" time="16:20:00"/>
    definindo componente: 
    export function Card(props) {
    return(
        <div className='Card'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
    }

    outra forma de fazer:
    ex (chamando componente): <Card name="Julio Balestrin" time="16:20:00"/>
    definindo componente: 
    export function Card({name, time}) {
    return(
        <div className='Card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )
    }




### ESTADO
    para atualizar algum texto da página por exemplo com base em alguma entrada digitada, necessita-se usar estado

    import React, {useState} from 'react' //permite utilizar estado, nativo do react

    const [studentName, setStudentName] = useState() //criar um array com destino onde será salvo o dado e nome da função que pegará o dado e atribuir recurso useState

    onChange={e => setStudentName(e.target.value)} //passa entrada digitada em tempo real para a função criada


### ADICIONAR DADOS EM UMA LISTA (IMUTABILIDADE)
    const [students, setStudents] = useState([]) //array com dados (lista)

    function handleAddStudent() {//quando executado, cria um objeto com nome e data atual
        const newStudent = {
            name: studentName,
            time: new Date().toLocaleTimeString("pt-br",{
            hour:"2-digit",
            minute:"2-digit",
            second:'2-digit',
            })
        };
        setStudents(prevState => [...prevState, newStudent]) //adiciona novos dados mantendo os antigos
    }


#### KEY PROP
    Ao trabalhar com adição de dados estilo lista de dados, é recomendado que cada item (objeto) tenha uma propriedade "key" com valor único
    ex: <Card 
        key=1
        name="Julio Balestrin" 
        time="16:20:00"
    />

#### HOOKS
    São funções que permitem conectar os recursos de estados e ciclos de vida do React a partir de componentes funcionais. Normalmente os Hooks iniciam com a palavra use por convenção. Exemplos de hooks: useState, useEffect
    ex: import React, {useState} from 'react'


### useEffect 
#### (basicamente é uma função que executa ao renderizar a aplicação e, se for indicado algum estado, também executa sempre que o estado for alterado)
#### Necessário importar biblioteca: import React, {useState, useEffect} from 'react'

    O useEffect é executado automaticamente sempre que o componente é renderizado.

    A estrutura do useEffect é da seguinte forma:

    useEffect(() => {
    // Dentro do objeto devemos colocar todas. ações que serão executadas.
        

    // Os arrays definem quais os estados que o useEffect depende. (quando vazio executa uma única vez quando a interface renderiza, quando preenchido com algum estado, é executado sempre que o estado é atualizado)
    }, []);


#### UseEffect + consumindo API
##### foi criado antes um estado para manter dados do usuario (const [user, setUser] = useState({name:'', avatar:''}))
<br>
<code>
    useEffect(() => {
    // corpo do useEffect (ações a serem executadas)

    console.log('useEffect foi chamado')

    fetch('https://api.github.com/users/luis22lf')

    .then(response => response.json())

    .then(data => {

        setUser({

        name: data.name,
        
        avatar: data.avatar_url
        })
    })
    },
        /*estados que useEffect depende (quando vazio executa uma única vez. Quando 
        preenchido, executa sempre que o estado é atualizado) */  
        [students]);
</code>



#### useEffect Async
    useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/birobirobiro");
      const data = await response.json();
      console.log("DADOS =>", data);

      setUser({
        name: data.name,
        avatar: data.avatar_url,
      });
    }

    fetchData();
    }, []);