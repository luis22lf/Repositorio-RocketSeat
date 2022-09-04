# Selecionando elementos

## Get elements by id
- permite acessar elementos html
- o elemento que deseja acessar precisa ter um id
- retorna element

<code>
const element = document.getElementById('NOMEID')
console.log(element)
</code>


## Get elements by className
- o elemento a ser acessado precisa ter uma class
- retorna um array (vários elementos pode ter a mesma classe)
- retorna htmlColection (não dá pra usar foreach)

<code>
const element = document.getElementByClassName('NOMECLASSE')
console.log(element)
</code>


## Get elements by TagName
- permite acessar elementos através da tag (\<head>, \<body>, \<h1>...)
- retorna um array (htmlColection)

<code>
const element = document.getElementByTagName('NOMETAG')
console.log(element)
</code>


## QuerySelector
- permite acessar elementos com no css (.NOMECLASSE, #NOMEID, [elemento]...)
- retorna o primeiro elemento que encontrar (element)

<code>
//retorna elemento que contenha atributo 'src'

const element = document.querySelector('[src]')
console.log(element)
</code>


## QuerySelectorAll
- permite acessar elementos com no css (.NOMECLASSE, #NOMEID, [elemento]...)
- retorna array de elementos que encontrar
- retorna nodelist (permite utilizar foreach) 

<code>
//retorna elementos que contenham atributo 'src'

const element = document.querySelectorAll('[src]')
console.log(element)
</code>
<br><br><br>

# Manipulando conteúdo

## textContent
- altera conteúdo de texto do elemento

<code>
const element = document.querySelector('h1')

element.textContent = 'Olá Devs!'
element.textContent += ' turo bom?'

console.log(element.textContent)
</code>

## innerHTML
- adiciona HTML através do JavaScript
- útil para definir texto E adicionar propriedades do html ao elemento

<code>
const element = document.querySelector('h1')

element.innerHTML = 'alteranto texto! <small>!!!</small>'

console.log(element.innerHTML)
</code>

## value
- permite modificar/acessar valor do elemento
- elemento precisa ter atributo value (geralmente input)

<code>
const element = document.querySelector('input')

element.value = 'outro valor'

console.log(element.value)
</code>
<br><br><br>

## Manipulando atributos

<code>
//acessa tag header

const header = document.querySelector('header')

//cria id='header'
header.setAttribute('id', 'header')

//variavel que acessa elemento com id = header

const headerID = document.querySelector('#header')
console.log(headerID.getAttribute('id'))

//remove atributo

header.removeAttribute('id')
console.log(header)
</code>
<br><br><br>

# Manipulando estilos e classes
## Alterando estilos com style
<code>
//acessa body

const element = document.querySelector('body')

element.style.backgroundColor = 'blue'
console.log(element.style.backgroundColor)
</code>

## classList
<code>
//acessa body

const element = document.querySelector('body')

//adiciona classes active e green

element.classList.add = ('active', 'green')
console.log(element.classList)

//remove classe active

element.classList.remove = ('active')

//se a classe já existe, remove, senão, adiciona

element.classList.toggle = ('active')
</code>
<br><br><br>

# Navegando entre elementos
## parentElement / parentNode
acessa elemento pai

<code>
//acessa body

const element = document.querySelector('body')

//mostra elemento pai (que contém body)

console.log(element.parentElement)
</code>
<br><br><br>

## childNodes e children
- retorna todos os filhos de um elemento (tudo que há dentro do elemento)
- childNodes reconhece espaços vazios como text
- ### dar preferência para formato HTMLColection

<code>
const element = document.querySelector('body')
<br>

//retorna filhos em formato HTMLColection
console.log(element.children)

//retorna filhos em formato nodeList
console.log(element.childNodes)

//retorna primeiro filho formato nodeList
console.log(element.firstChild)

//retorna primeiro filho formato HTMLColection
console.log(element.firstElementChild)
</code>

há também o lastChild e lastElementChild
<br><br><br>

## previousElentSibling e nextElentSibling
- retorna irmãos de um elemento (se dentro de body tem um header e um script, header e script são irmãos)
- next retorna próximo irmão e previous o anterior

<code>
const element = document.querySelector('body')
<br>

//retorna próximo irmão
console.log(element.nextElentSibling)

//retorna irmão anterior
console.log(element.previousElentSibling)
</code>

há nextSibling e previousSibling também (reconhece espaços vazios (enter))
<br><br><br>

## Criando e adionando elementos
- document.createElement('ELEMENTO') -> cria elemento
- append(ELEMENTO) -> adiciona elemento ao final
- prepend(ELEMENTO) -> adicona elemento ao início
- insertBefore(ELEMENTO, REFERENCIA) -> adiciona elemento antes da referência (para casos de adicionar elemento em um ponto específico no html)
- insertBefore(ELEMENTO, REFERENCIA.nextSibling) -> adiciona elemento após referência

<code>
//cria elemento div<br>
const div = document.createElement('div')<br>
//adicona texto em div<br>
div.innerText('Olá, devs!')

//seleciona body<br>
body = documento.querySelector('body')

//adiciona uma div no fim de body<br>
body.append(div)

//adiciona uma div no início de body<br>
body.prepend(div)

//adiciona uma div antes de script em body<br>
const script = document.body.querySelector('script')
body.insertBefore(div, script)
</code>
<br>
<br>
<br>


# Eventos
Podem ser adicionados via HTML no elemento desejado ex: <\button onclick='teste()'>
- onclick='NOMEFUNCAO' -> executa uma função ao clicar com mouse
- ondbclick='NOMEFUNCAO' -> executa função ao dar clique dublo

## Eventos de teclado
Eventos disparados através de interação com o teclado, geralmente usado em inputs (campos de texto)

- onkeydown -> dispara ao pressionar uma tecla
- onkeyup -> dispara ao soltar uma tecla
- onkeypress -> dispara ao pressionar uma tecla

<code>
const input = document.querySelector('input')

input.onkeypress = () => {
    console.log('disparou evento')
}
</code>

## Adicionando evento via JS
### addEventLister('EVENTO', FUNCAO)
adiciona um evento a ser observado (clique do mouse, tecla pressionada...), recebe como parâmetro o evento desejado e a função a ser executada (sem parenteses)
<code>
const h1 = document.querySelector('h1')

//mouseover é quando o mouse fica sobre o elemento<br>
h1.addEventListener('mouseover', print)

function print(){
    console.log('executou função')
}
</code>
<br><br>

## Argumento event
argumento que contém informações sobre o evento a ser executado (possuí vários atributos que podem ser acessados através dele)

<code>
const input = document.querySelector('input')

input.input.addEventListener('keydown' funcao)

function funcao(event) {
//retorna alvo do disparo do evento (input)<br>
console.log(event.currentTarget)

//retorna valor do alvo do disparo do evento (input)<br>
console.log(event.currentTarget.value)

//retorna tecla pressionada<br>
console.log(event.key)
}
</code>