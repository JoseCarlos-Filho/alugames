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
      return jogoTakeNoko.querySelector(".dashboard__item__button");
  }

}

function mudaEstadoDoBotao(botao, jogo) {
  const elementoJogo = document.getElementById(`game-${jogo}`);
  const imagemJogo = elementoJogo.querySelector(".dashboard__item__img");

  if (botao.innerHTML === "Alugar") {
    botao.classList.add("dashboard__item__button--return");
    imagemJogo.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
  } else if (botao.innerHTML === "Devolver") {
    botao.classList.remove("dashboard__item__button--return");
    imagemJogo.classList.remove("dashboard__item__img--rented");
    botao.textContent = "Alugar";
  }
}

function alterarStatus(jogo) {
  const btnJogo = carregaBotao(jogo);
  mudaEstadoDoBotao(btnJogo, jogo);
}
