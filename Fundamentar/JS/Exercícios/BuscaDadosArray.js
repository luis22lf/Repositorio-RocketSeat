/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length
//numero de categorias
console.log(`numero de categorias: ${totalCategories}`)
//numero de livros em cada categoria
for (let category of booksByCategory) {
    console.log(`total de livros da categoria ${category.category}: ${category.books.length}`)
}

//numero de autores
let authors = [];
for (let category of booksByCategory) {
    for (let book of category.books)
    {
        if (authors.indexOf(book.author)==-1)
        authors.push(book.author)   
    }
}
console.log(`autores: ${authors.length}`)

//livros do autor Augusto Cury
const searchBooksByAuthor = (author) => {
    let booksOfAuthor = [];
    for (let category of booksByCategory) {
        for (let book of category.books)
        {
            if (book.author == author)
            booksOfAuthor.push(book.title) 
        }
    }
    console.log(`livros do Autor ${author}: ${booksOfAuthor.join(", ")}`)
}
searchBooksByAuthor('Augusto Cury')
