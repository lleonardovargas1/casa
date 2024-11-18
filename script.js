let score = 0; // Variável de pontuação
let questionIndex = { chemistry: 0, physics: 0, biology: 0 }; // Rastreamento de progresso por setor
let answeredQuestions = { chemistry: [], physics: [], biology: [] }; // Perguntas já respondidas

// Perguntas e respostas por setor
const questions = {
  chemistry: [
    {
      title: "Mistério Químico 1",
      content: "Escolha o reagente correto para gerar uma reação segura e estável.",
      hint: "Lembre-se: uma base fraca pode ser mais segura!",
      choices: [
        { text: "Água e Sódio", correct: false },
        { text: "Ácido e Base Fraca", correct: true },
        { text: "Peróxido e Água", correct: false }
      ]
    },
    {
      title: "Mistério Químico 2",
      content: "Qual composto é necessário para uma reação exotérmica controlada?",
      hint: "Alguns elementos reagem melhor em condições seguras.",
      choices: [
        { text: "Sódio", correct: false },
        { text: "Cloreto de Sódio", correct: true },
        { text: "Magnésio", correct: false }
      ]
    }
  ],
  physics: [
    {
      title: "Desafio de Física 1",
      content: "Equilibre o sistema ajustando a intensidade da força.",
      hint: "Forças moderadas podem evitar desequilíbrios!",
      choices: [
        { text: "Força Fraca", correct: false },
        { text: "Força Moderada", correct: true },
        { text: "Força Forte", correct: false }
      ]
    },
    {
      title: "Desafio de Física 2",
      content: "Escolha a direção da força para mover um objeto para cima.",
      hint: "Considere a direção da gravidade.",
      choices: [
        { text: "Para baixo", correct: false },
        { text: "Para cima", correct: true },
        { text: "Para o lado", correct: false }
      ]
    }
  ],
  biology: [
    {
      title: "Quebra-Cabeça Biológico 1",
      content: "Escolha a base do DNA para formar o par correto.",
      hint: "Bases complementares são a chave para pares perfeitos.",
      choices: [
        { text: "Adenina e Timina", correct: true },
        { text: "Citosina e Guanina", correct: true },
        { text: "Uracila e Timina", correct: false }
      ]
    },
    {
      title: "Quebra-Cabeça Biológico 2",
      content: "Qual organela é responsável pela respiração celular?",
      hint: "Pense em 'energia' para a célula.",
      choices: [
        { text: "Mitocôndria", correct: true },
        { text: "Ribossomo", correct: false },
        { text: "Núcleo", correct: false }
      ]
    }
  ]
};

// Atualiza a pontuação na interface
function updateScore(points) {
  score += points;
  document.getElementById("score").innerText = score;
}

// Inicia o desafio do setor selecionado
function startPuzzle(sector) {
  const currentQuestion = questions[sector][questionIndex[sector]];

  // Verifica se a pergunta já foi respondida
  if (answeredQuestions[sector].includes(questionIndex[sector])) {
    alert("Você já respondeu esta pergunta! Escolha outra.");
    return;
  }

  const { title, content, hint, choices } = currentQuestion;

  // Atualiza o diálogo com a pergunta
  document.getElementById("dialog-title").innerText = title;
  document.getElementById("dialog-content").innerText = content;

  // Exibe a dica do personagem
  document.getElementById("character-dialog").innerText = hint;

  // Limpa as opções anteriores e cria as novas
  const choicesContainer = document.getElementById("choices");
  choicesContainer.innerHTML = "";
  choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => checkAnswer(choice.correct, sector, questionIndex[sector]);
    choicesContainer.appendChild(button);
  });

  // Mostra o diálogo
  document.getElementById("dialog-box").style.display = "block";
}

// Verifica se a resposta está correta
function checkAnswer(isCorrect, sector, currentIndex) {
  if (answeredQuestions[sector].includes(currentIndex)) {
    alert("Essa pergunta já foi respondida! Escolha outra.");
    closeDialog();
    return;
  }

  if (isCorrect) {
    // Resposta correta
    updateScore(10);
    document.getElementById("character-dialog").innerText = "Parabéns! Resposta correta!";
    alert("Resposta correta! Você ganhou 10 pontos.");

    // Marca a pergunta como respondida
    answeredQuestions[sector].push(currentIndex);

    // Avança para a próxima pergunta
    questionIndex[sector]++;
    if (questionIndex[sector] < questions[sector].length) {
      startPuzzle(sector);
    } else {
      // Finaliza o setor
      alert("Você completou todas as perguntas deste setor!");
      questionIndex[sector] = 0; // Reinicia o progresso para futuros jogos
      closeDialog();
    }
  } else {
    // Resposta incorreta
    document.getElementById("character-dialog").innerText = "Tente novamente! Essa resposta está errada.";
    alert("Resposta incorreta! Tente outra opção.");
  }
}

// Fecha o diálogo
function closeDialog() {
  document.getElementById("dialog-box").style.display = "none";
  document.getElementById("character-dialog").innerText = "Escolha outro setor para continuar!";
}
