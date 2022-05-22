"use strict";

const semaforo = document.getElementById("semaforo");
const vermelho = document.getElementById("vermelho");
const amarelo = document.getElementById("amarelo");
const verde = document.getElementById("verde");
const automatico = document.getElementById("automatico");

let tempoTrocaCores = null;

const luzVermelha = () => (semaforo.src = "./img/vermelho.png");

const luzAmarela = () => (semaforo.src = "./img/amarelo.png");

const luzVerde = () => (semaforo.src = "./img/verde.png");

const luzAutomatica = () => {
  let urlLuzAtual = semaforo.src;
  let luzAtual = urlLuzAtual.split("/")[4];

  if (luzAtual === "desligado.png") {
    luzVerde();
  } else if (luzAtual === "verde.png") {
    luzAmarela();
  } else if (luzAtual === "amarelo.png") {
    luzVermelha();
  } else if (luzAtual === "vermelho.png") {
    luzVerde();
  } else {
    semaforo.src = "./img/desligado.png";
  }
};

const trocarCores = () => {
  tempoTrocaCores = setInterval(luzAutomatica, 500);
};

vermelho.addEventListener("click", function () {
  clearInterval(tempoTrocaCores);
  luzVermelha();
});

amarelo.addEventListener("click", function () {
  clearInterval(tempoTrocaCores);
  luzAmarela();
});
verde.addEventListener("click", function () {
  clearInterval(tempoTrocaCores);
  luzVerde();
});

automatico.addEventListener("click", trocarCores);
