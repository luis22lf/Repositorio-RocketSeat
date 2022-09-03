## Seletores
##### alterar propiedades de elementos HTML
h1 {
	color: blue;
	font-size: 60px;
}

p {
	color: green;
}
<br>
<br>

##### alterar propiedades de id HTML
#title {
  color: yellow;
}

#content {
	color: orange;
}
<br>
<br>

##### alterar propriedades de classe HTML

.red {
color: red;
}

.big {
	font-size: 3em;
}
<br>
<br>

##### alterar propriedades de elementos com um atributo especifico HTML

[title] {
	color: orange;
}
<br>
<br>

##### alterar propriedades de elementos ao deixar o mouse em cima deles HTML
p:hover {
	color: red;
}
<br>
<br>

##### alterar propriedades de multilos elementos HTML
h1, p, .title, .title:hover {
	color: red;
}
<br>
<br>

## Combinators
##### altera propriedades somente do h2 que está dentro de um article que está dentro de um body (Busca um elemento dentro de outro, mesmo que existam outros elementos no caminho)
###### obs: mesmo que tenha outros elementos não especificados como uma div que contenha o article que contem h2, ele vai achar o elemento h2 
body article h2 {
	color: red;
}
<br>
<br>

## Child combinator
##### altera propriedades somente do li que está dentro de um ul que está dentro do body
###### obs: se houver outros elementos no meio do caminho, nesse caso não vai funcionar, se houver vários li dentro de ul dentro de body, vai funcionar só para o primeiro (para funcionar para todos teria que remover o body do comando)
body > ul > li {
	color: blue;
}
<br>
<br>

## Sibling combinator
##### Identificado pelo sinal + entre dois seletores. Seleciona somente o elemento do lado direito que é irmão direto na hierarquia (pega só o primeiro p que é irmão direto de h1)
HTML

\<h1>
  Título
\</h1>

\<p>
  Esse é um parágrafo
\</p>

\<p>
  Mais um parágrafo
\</p>

CSS

h1 + p {
	color: red;
}
<br>
<br>

## General Sibling combinator
##### Identificado pelo sinal ~ entre dois seletores. Seleciona todos os elementos irmãos (pega todos os p)
HTML

\<h1>
  Título
\</h1>

\<p>
  Esse é um parágrafo
\</p>

\<p>
  Mais um parágrafo
\</p>

CSS

h1 ~ p {
	color: red;
}
<br>
<br>

# Pseudo-classes
##### É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico. Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
##### https://developer.mozilla.org/pt-BR/docs/Web/CSS/Pseudo-classes
:pseudo-class-name
<br> <br>

### first-child
:first-child
##### É quando queremos selecionar o primeiro filho de um grupo de elementos.
HTML

\<ul>

  \<li>Gratidão</li>

  \<li>Esperança</li>

  \<li>Fé</li>

\</ul>

CSS

ul li:first-child {
  font-weight: bold;
}

###### altera somente o primeiro li dentro de ul (se tivesse outro elemento que não fosse li seguido de ul não funcionaria porque nesse caso li seria second child)
<br> <br>

### nth-of-type
:nth-of-type()
##### Pega o elemento por tipo e posição
HTML

\<ul>

  \<h3>Palavras bonitas</h3>

  \<li>Gratidão</li>

  \<li>Esperança</li>

  \<li>Fé</li>

\</ul>

CSS

ul li:nth-of-type(1) {
  font-weight: bold;
}
###### modifica o primeiro li que aparece dentro de ul
<br> <br>

### nth-child
:nth-child()
##### É quando queremos selecionar o primeiro filho de um grupo de elementos.
ul li:nth-child(2) {
  font-weight: bold;
}
<br> <br>

### nth-child odd e even
:nth-child(odd) e :nth-child(even)

even - números pares

odd - números ímpares
##### se tiver uma lista com varios itens, modifica todos os itens pares ou impares
ul li:nth-child(odd) {
  color: gray;
}
<br> <br>

## hover e focus
:hover
##### Vai mudar a cor do link para vermelho quando o usuário passar o mouse sobre o link
a:hover {
  color: red;
}

:focus 
##### é aplicado quando o elemento recebe o foco da ação do usuário que pode ser feita utilizando o teclado ou clicando no elemento com o mouse. É comumente usado em campos de input como uma forma de mostrar qual o input "ativo".
input:focus {
  border-color: red;
}
<br> <br>

## disabled e required
##### Também podemos usar atributos para selecionar elementos no CSS
:disabled

input:disabled {
  background-color: green;
}

:required

input:required {
  background-color: red;
}
##### modifica propriedades do elemento que possui atributo disabled e required
<br> <br>

# Pseudo-elements
#### https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
Com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

::pseudo-element-name

### ::before 
adiciona um pseudo-elemento antes do elemento selecionado.

HTML
#### \<li> dentro de \<ul>
<ul>
  <li>Gratidão</li>
  <li>Esperança</li>
  <li>Fé</li>
  <li>Liberdade</li>
</ul>
CSS

li::before {
  content: "> "
}
<br><br>


### ::after 
adiciona um pseudo-elemento depois do elemento selecionado.

li::after{
  content: ";"
}

### Tanto para o ::before quanto para o ::after é preciso adicionar o content, mesmo que ele seja vazio content = "";
<br>


### ::first-line 
pega a primeira linha de um texto.

p::first-line {
	font-weight: bold;
}
<br><br>

## Layout
##### div é um elemento block (ocupa toda a linha e o próximo elemento acaba tendo que ir para a linha de baixo)
(transforma em tipo inline e joga para esquerda)<br>
\<div style="float:left">esquerda\</div><br> 

(transforma em tipo inline e joga para direita)<br>
\<div style="float:right">direita\</div> <br>

(limpa modificações e volta ao normal flow (block))<br>
\<div style="clear:both">normal flow\</div> <br>
<br><br>


## TERMINOLOGIA

Flex container (estrutura que terá algum conteúdo dentro)

Flex item (itens do container)

Nesting (item com outros itens dentro ex: uma div contendo outras divs)

Axis (eixos x e y)

main (eixo principal, flex o principal é o X)
- start e end

cross (eixo secundário)
- start e end

Flex sizing
- tamanho flexível para preenchimento dos espaços do flex container



## PROPRIEDADES FLEX CONTAINER
-flex-direction (altera a direção)
- row | row-reverse | column | column-reverse

-flex-wrap (possibilita usar multi linhas cada uma como sendo um novo flex container "se não couber tudo numa linha cria uma linha nova e joga conteúdo restante abaixo")
- flex-wrap: wrap;

-flex-flow (shorthand permite usar flex-direction e flex-wrap na mesma linha)
- flex-flow: column wrap;

-justify-content (alinhamento dos elementos dentro do container | distribuição dos elementos)
- flex-start (inicia no começo do eixo main)
- flex-end (inicia no fim do eixo main)
- center (inicia no centro do eixo main)
- space-around (espaço ao redor de cada elemento, como se fosse uma margem)
- space-between (espaço entre elementos, espaça igualmente conforme espaço disponível)
- space-evenly (espaço entre elementos e entre limites igualmente espaçados)

-align-items (alinhamento dos elementos no eixo cruzado)
- stretch (estica item para preencher todo o eixo cruzado)
- flex-start (deixa elementos no início do eixo cruzado)
- flex-end (deixa elementos no fim do eixo cruzado)
- center (deixa elementos no centro do eixo cruzado)

-gap (espaço entre elementos)
- unidades fixas: px, pt
- unidades flexíveis: %, em, rem
<br><br>

## Propriedades dos itens
### flex-basis
- define tamanho ou altura (dependendo do eixo principal) como no width e height

### flex-grow (crescimento dos itens)
- flex-grow: 0; (não faz nada, zero é o valor padrão)
- flex-grow: 1; (faz com que o item preencha todo o espaço vazio do container, se aplicado a mais de um item, divide em partes iguais o espaço)
##### obs: o valor inserido é a fração do espaço vazio que vai ser atribuido ao elemento
<br>

### flex-shrink (encolhimento do item)
- flex-shrink: 0; (não surte efeito)

### flex 
(shorthand, um único valor corresponde ao flex-grow, um valor com unidade corresponde ao flex-basis e o outro ao flex-shrink)
- flex: 1 0 0px;

### order (ordenar elementos no container)
- order: 1;
##### o valor padrão para todos elementos é zero, ao definir um valor maior para um item, ele se deslocará para o fim da lista e, um valor menor, fará se deslocar para o início