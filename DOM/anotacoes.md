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