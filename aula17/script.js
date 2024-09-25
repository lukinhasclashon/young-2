const NUMERO = document.querySelector('div span')
const VOLTAR_BTN = document.querySelector('.voltar')
const ZERAR_BTN = document.querySelector('.zerar')
const AVANCAR_BTN =document.querySelector('.avancar')

let contador = 1

VOLTAR_BTN.addEventListener('click', voltar_numero)
AVANCAR_BTN.addEventListener('click', aumentar_numero)
ZERAR_BTN.addEventListener('click', zerar_numero)

function voltar_numero(){
   if( contador > -10){
    contador--
    NUMERO.innerText = contador
    }
}

function aumentar_numero(){
   if(contador < 10){
    contador++
    NUMERO.innerText = contador
   }
}

function zerar_numero(){
    contador=1
    NUMERO.innerText = contador
}