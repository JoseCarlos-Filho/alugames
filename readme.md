# AlugaGames - Simulação de Aluguel de Jogos de Tabuleiro

![Imagem do projeto](./img/logo.svg)

## Descrição do Projeto

O AlugaGames é uma aplicação web simples que simula o processo de aluguel de jogos de tabuleiro. O projeto permite que o usuário interaja com botões para "Alugar" ou "Devolver" jogos, alterando dinamicamente o estado desses botões.

## Funcionalidades

*   **Listagem de Jogos:** A aplicação exibe uma lista de jogos de tabuleiro (Monopoly, Ticket to Ride e Take Noko).
*   **Aluguel/Devolução:** Cada jogo possui um botão que permite ao usuário "Alugar" ou "Devolver" o jogo.
*   **Mudança de Estado Dinâmica:** O texto e o estilo do botão mudam dinamicamente para indicar se o jogo está atualmente alugado ("Devolver") ou disponível para aluguel ("Alugar").
* **Feedback Visual:** O botão muda de estilo para fornecer um feedback visual claro ao usuário sobre o status de aluguel do jogo.

## Tecnologias Utilizadas

*   **HTML:** Para a estrutura da página web.
*   **CSS:** Para o estilo visual da página.
*   **JavaScript:** Para a lógica de interação e mudança de estado dos botões.

## Como Funciona

O código JavaScript (`app.js`) é o coração da aplicação. Ele implementa a lógica para alterar o estado dos botões. Aqui está um detalhamento:

1.  **Seleção dos Jogos:** O código seleciona os elementos HTML que representam os jogos usando seus IDs (`game-1`, `game-2`, `game-3`).
2.  **Função `carregaBotao(jogo)`:** Esta função recebe o número do jogo (1, 2 ou 3) e retorna o elemento do botão correspondente ("Alugar/Devolver"). Ela usa uma estrutura `switch` para determinar qual botão retornar.
3.  **Função `mudaEstadoDoBotao(botao)`:** Esta função recebe o elemento do botão e altera seu estado. Ela verifica se o texto do botão é "Alugar" ou "Devolver" e, em seguida:
    *   Muda o texto do botão para o estado oposto ("Alugar" para "Devolver" ou "Devolver" para "Alugar").
    *   Adiciona ou remove a classe CSS `dashboard__item__button--return` para alterar a aparência do botão.
4.  **Função `alterarStatus(jogo)`:** Esta é a função principal. Ela recebe o número do jogo, chama `carregaBotao()` para obter o botão e, em seguida, chama `mudaEstadoDoBotao()` para alterar o estado do botão.
5. **Chamada da função:** A função `alterarStatus()` é chamada através do evento `onclick` no HTML.

## Estrutura do Projeto

*   **`index.html`:** Contém a estrutura HTML da página, incluindo a listagem de jogos e os botões.
*   **`css/`**
    *   **`reset.css`:** Contém regras CSS para resetar estilos padrão.
    *   **`style.css`:** Contém os estilos CSS principais da aplicação.
*   **`js/`**
    *   **`app.js`:** Contém o código JavaScript que implementa a lógica de aluguel/devolução.
* **`img/`**
    * Contém as imagens dos jogos.

## Como Executar

1.  **Clone o repositório:**
    ```bash
    git clone [<https://github.com/JoseCarlos-Filho/alugames>]
    ```
    execute o comando git na pasta de sua preferencia para a clonagem do repositório.

2.  **Abra `index.html`:** Abra o arquivo `index.html` no seu navegador.
3.  **Interaja com os botões:** Clique no botão "Alugar" para mudar o estado para "Devolver" e vice-versa.

## Melhorias Futuras

*   **Persistência de Dados:** Implementar uma forma de armazenar o estado dos jogos (alugado/disponível) para que ele seja mantido mesmo após o recarregamento da página (por exemplo, usando `localStorage`).
*   **Mais Jogos:** Adicionar mais jogos à listagem.
*   **Melhorias na Interface:** Melhorar o design visual e a experiência do usuário.
* **Quantidade:** Adicionar uma quantidade de jogos disponíveis.
* **Remover a dependência do ID:** Remover a dependência do ID para selecionar os jogos.

## Autor

![José Carlos](https://github.com/JoseCarlos-Filho)
