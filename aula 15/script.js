const SENHA_ELEMENTO = document.querySelector('#password')
const VISOR_ELEMENTO = document.querySelector('.password-display')
const TAMANHO_ELEMENTO = document.querySelector('#tamanho')
const MAIUSCULA_ELEMENTO = document.querySelector('#maiusculas')
const MINUSCULA_ELEMENTO = document.querySelector('#minusculas')
const NUMEROS_ELEMENTO = document.querySelector('#numeros')
const CARACTERES_ELEMENTO = document.querySelector('#caracteres')
const GERAR_ELEMENTO = document.querySelector('.submit')
const LIMPAR_ELEMENTO = document.querySelector('.reset')
const DISPLAY_ELEMENTO = document.querySelector('.header-container')
const ALERTA_ELEMENTO = document.querySelector('div.alerta')

const MAIUSCULAS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const MINUSCULAS = MAIUSCULAS.toLowerCase()
const NUMEROS = '0123456789'
const CARACTERES = '!@#$%¨&*()//!@$#%¨&*(¨%$#@!#$%¨&)'

GERAR_ELEMENTO.addEventListener('click', gerar_senha)
DISPLAY_ELEMENTO.addEventListener('click', copiar_senha)
LIMPAR_ELEMENTO.addEventListener('click', limpar_tela)

function limpar_tela (){
    location.reload()
}

function copiar_senha() {
    if (SENHA_ELEMENTO.innerText === ''){
        return
    }
    navigator.clipboard.writeText(SENHA_ELEMENTO.innerText)
    alerta_copiar()
}

function alerta_copiar(){
    ALERTA_ELEMENTO.classList.add('show')
    SENHA_ELEMENTO.innerText = ''
    setTimeout(() => ALERTA_ELEMENTO.classList.remove('show'), 2000)
}

function gerar_senha(){
    let tamanho_senha = TAMANHO_ELEMENTO.value
    
    if (!tamanho_senha){
        tamanho_senha = 4
    }

    let senha = ''
    for (let vez = senha.length; vez < tamanho_senha; vez++){
        const SENHA_MISTURADA = misturar ()
        senha += SENHA_MISTURADA
    }
    SENHA_ELEMENTO.innerText = senha

}

function sortear_maiuscula() {
    let indice_sorteado = Math.random () * MAIUSCULAS.length
    let indice_arredondado = Math.floor(indice_sorteado)
    let sorteado = MAIUSCULAS[indice_arredondado]
    return sorteado
}
function sortear_minusculas() {
    let indice_sorteado = Math.random () * MINUSCULAS.length
    let indice_arredondado = Math.floor(indice_sorteado)
    let sorteado = MINUSCULAS[indice_arredondado]
    return sorteado
}
function sortear_numero() {
    let indice_sorteado = Math.random () * NUMEROS.length
    let indice_arredondado = Math.floor(indice_sorteado)
    let sorteado = NUMEROS[indice_arredondado]
    return sorteado
}
function sortear_caractere() {
    let indice_sorteado = Math.random () * CARACTERES.length
    let indice_arredondado = Math.floor(indice_sorteado)
    let sorteado = CARACTERES[indice_arredondado]
    return sorteado
}

function misturar() {
    const ELEMENTOS = []
    if (MAIUSCULA_ELEMENTO.checked){
        ELEMENTOS.push(sortear_maiuscula())
    }
    if (MINUSCULA_ELEMENTO.checked){
        ELEMENTOS.push(sortear_minusculas())
    }
    if (NUMEROS_ELEMENTO.checked){
        ELEMENTOS.push(sortear_numero())
    }
    if (CARACTERES_ELEMENTO.checked){
        ELEMENTOS.push(sortear_caractere())
    }

    if (ELEMENTOS.length === 0) {
        return ''
    }

    return ELEMENTOS[Math.floor(Math.random() * ELEMENTOS.length)]
}