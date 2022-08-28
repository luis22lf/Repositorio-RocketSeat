# Tags para torar mais semântico o site

## Ex.1 Citação usando \<blockquote> ao invés de \<p>
##### pode ser usado para várias coisas, citação é somento um exemploS
<blockquote>
Nós (programadores) somos pagos para resolver problemas,
não para memorizar soluções.
												    <cite>─ Mayk Brito</cite>
</blockquote>
<br>


## Cabeçalho \<header>
#### poder haver multiplos header em uma página
#### pode ser usado dentro de outro elemento semantico(section, article)
#### não pode estar em um footer ou dentro de outro header
<header>
  Texto do Cabeçalho
</header>
<br>

## Navegação \<nav>
 ##### seria botões, menus... que levam para seções do site (outras telas), geralmente fica dentro do header mas não é regra, pode haver mais de um na página
<nav>
    texto nav
</nav>
<br>

## Conteudo principal \<main>
<main>
    conteudo principal aqui
</main>
<br>

## Barra lateral \<aside>
### não é o conteúdo na lateral do site necessariamente (sidebar)
##### algum conteúdo levemente relacionado ao principal, como explicações do conteúdo, glossários, links extras, biografia do autor, informações de perfil e etc.
<aside>
    <h3></h3>
    <dl> </dl>
</aside>
<br>

## Rodapé \<footer>
#####  fica no final da página e vai geralmente ter informações do autor da página, copyright, contato, sitemap, voltar ao topo, são algumas das coisas que aparecem geralmente no footer
<footer>
    <p>Texto footer</p>
</footer>
<br>

## \<article>
#### Bloco de conteudo que são relacionados entre si
<br>

## \<Section>
##### serve para colocarmos seções na nossa página HTML. Geralmente se coloca um título e conteúdo na tag section. (se for usar repetidamente talvez seja mais interessante usar article)
###### ex: 
<main>
    <h1>Receita 1</h1>
    <p>descrição da receita</p>

    <section>
        <h2> Modo de preparo</h2>
        <p>Modo de preparo</p>
    </section>
</main>