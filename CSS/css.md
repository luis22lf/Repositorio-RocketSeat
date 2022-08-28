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