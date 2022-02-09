'use strict'

const semaforo = document.getElementById('semaforo')
const vermelho = document.getElementById('vermelho')
const amarelo = document.getElementById('amarelo')
const verde = document.getElementById('verde')
const automatico = document.getElementById('automatico')
let idAutomatico = null;



const luzVermelha = () => semaforo.src = './img/vermelho.png' 


const luzAmarela = () => semaforo.src = './img/amarelo.png' 


const luzVerde = () => semaforo.src = './img/verde.png'


const luzAutomatica = () => {
    if (luzVermelha()) {
        luzAmarela()
    } else if (luzVerde()) {
        luzAmarela()
    } else {
        luzVermelha()
    }
}
const trocarCores = () => {

    if (idAutomatico == null) {
        if (!luzVermelha && !luzAmarela && !luzVerde) {
            idAutomatico = setInterval (luzAutomatica, 500)
        }
    }
}


vermelho.addEventListener('click', luzVermelha)
amarelo.addEventListener('click', luzAmarela)
verde.addEventListener('click', luzVerde)
automatico.addEventListener('click', luzAutomatica)
