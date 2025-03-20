const {log} = console;
const jogoMonopoly = document.getElementById("game-1");
const jogoTicketToRide = document.getElementById("game-2");
const jogoTakeNoko = document.getElementById("game-3");

function carregaBotao (jogo) {
  switch (jogo) {
    case 1:
      return jogoMonopoly.querySelector(".dashboard__item__button");
    case 2:
      return jogoTicketToRide.querySelector(".dashboard__item__button");
    case 3:
      return jogoTakeNoko.querySelector(".dashboard__item__button")
  }

}

function mudaEstadoDoBotao(botao) {
  log(botao.innerHTML);
  if (botao.innerHTML === "Alugar") {
    botao.classList.add("dashboard__item__button--return");
    botao.textContent = "Devolver";
  } else if (botao.innerHTML === "Devolver") {
    botao.classList.remove("dashboard__item__button--return");
    botao.textContent = "Alugar";
  }
}

function alterarStatus(jogo) {
  log(jogo);
  const btnJogo = carregaBotao(jogo);
  log(btnJogo);
  mudaEstadoDoBotao(btnJogo);
}
