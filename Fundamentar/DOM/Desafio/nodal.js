const botao = document.querySelector('button');
const div = document.querySelector('.nodal-wrapper')//retorna div que contem classe nodal-wrapper
let click_button = false;
const body = document.querySelector('body')

botao.addEventListener('click', removeClasse)

function removeClasse() {
div.classList.remove('invisible')
click_button = true;
}

document.addEventListener('keyup', adicionaClasse)

function adicionaClasse(event) {
    console.log(event.key)
if (click_button){
    console.log(event.key)
    if(event.key === 'Escape')
    {
        click_button = false;
        div.classList.add('invisible')
    }
}
}