const NOME = document.querySelector('#nome-entrada')
const N1 = document.querySelector('#n1-entrada')
const N2 = document.querySelector('#n2-entrada')
const N3 = document.querySelector('#n3-entrada')
const BOTAO = document.querySelector('.enviar')

BOTAO.addEventListener('click', salvar_dados)


function salvar_dados() {
localStorage.setItem('n1', N1.value)    
localStorage.setItem('n2', N2.value)
localStorage.setItem('n3', N3.value)
localStorage.setItem('nome', NOME.value)
}