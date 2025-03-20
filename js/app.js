 const {log} = console;
const jogoMonopoly = document.getElementById("game-1");
const jogoTicketToRide = document.getElementById("game-2");
const jogoTakeNoko = document.getElementById("game-3");

function carregaBotao () {
  const botao = document.querySelector(".dashboard__item__button");
  return botao;
}

function mudaEstadoDoBotao(botao) {
  if (botao.textContent === "Alugar") {
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  } else if (botao.textContent === "Devolver") {
    botao.classList.remove("dashboard__item__button");
    botao.textContent = "Alugar";
  }

}

function alterarStatus(jogo) {
  if (jogo === 1) {
    const btnJogo = carregaBotao();
    mudaEstadoDoBotao(btnJogo);
  } else if (jogo === 2) {
    const btnJogo = carregaBotao();
    mudaEstadoDoBotao(btnJogo);
  } else if (jogo === 3) {
    const btnJogo = carregaBotao();
    mudaEstadoDoBotao(btnJogo);
  }

  
  // const botao = ancora.parentElement;
  // log(botao.textContent);
  
  // if (botao.status === "Alugar") {
  //   botao.classList.add("dashboard__item__button--return");
  //   botao.textContent = "Devolver";
  //   botao.status = "Devolver";
  // } else {
  //   botao.classList.remove("dashboard__item__button--return");
  //   botao.textContent = "Alugar";
  //   botao.status = "Alugar";
  // }
 
}
