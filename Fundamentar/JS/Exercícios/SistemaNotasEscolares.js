// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C
// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F

let score = 90;
let saida;

if (score >= 90)
    saida = 'A'
else if (score >= 80 && score <= 89)
    saida = 'B'
else if (score >= 70 && score <= 79)
    saida = 'C'
else if (score >= 60 && score <= 69)
    saida = 'D'
else
    saida = 'F'

console.log(saida)