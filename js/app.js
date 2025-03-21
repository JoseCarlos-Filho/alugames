const {log} = console;
const jogoMonopoly = document.getElementById("game-1");
const jogoTicketToRide = document.getElementById("game-2");
const jogoTakeNoko = document.getElementById("game-3");
let jogosAlugados = [];

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
  const nomeDoJogo = elementoJogo.querySelector(".dashboard__item__name");
  const elementoImagem = elementoJogo.querySelector(".dashboard__item__img");
  const imagemJogo = elementoJogo.querySelector(".dashboard__item__img img");

  if (botao.innerHTML === "Alugar") {
    
    botao.classList.add("dashboard__item__button--return");
    elementoImagem.classList.add("dashboard__item__img--rented");
    botao.textContent = "Devolver";
    jogosAlugados.push({
      jogo: jogo,
      nome: nomeDoJogo,
      imagemJogo: imagemJogo
    });

  } else if (botao.innerHTML === "Devolver") {
    
    if (confirmarDevolucao()) {
    botao.classList.remove("dashboard__item__button--return");
    elementoImagem.classList.remove("dashboard__item__img--rented");
    botao.textContent = "Alugar";
    }

  }
  numeroDeJogosAlugados(jogosAlugados);
}

function confirmarDevolucao() {
  return confirm("Deseja realmente devolver o jogo?");
}

function numeroDeJogosAlugados(jogosAlugados) {
  log(`Número de jogos alugados: ${jogosAlugados.length}`);
  jogosAlugados.forEach(item => {
    log(`Jogo ${item.nome.textContent} alugado e sua imagem ${item.imagemJogo.src} .`);
  });
}

function alterarStatus(jogo) {
  const btnJogo = carregaBotao(jogo);
  mudaEstadoDoBotao(btnJogo, jogo);
}

