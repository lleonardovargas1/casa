const questions = {
    chemistry: [
      { question: "Qual é o principal componente do ar atmosférico?", choices: ["Oxigênio", "Nitrogênio", "Argônio", "Dióxido de carbono"], correct: "Nitrogênio" },
      { question: "O que ocorre durante uma reação de neutralização?", choices: ["Formação de um sal e água", "Liberação de gás oxigênio", "Formação de um ácido mais forte", "Dissociação do ácido"], correct: "Formação de um sal e água" },
      { question: "O que é uma reação exotérmica?", choices: ["Reação que libera calor", "Reação que absorve calor", "Reação que forma gases", "Reação que não envolve calor"], correct: "Reação que libera calor" },
      { question: "Qual é a unidade de medida da quantidade de substância?", choices: ["Mol", "Joule", "Litro", "Pascal"], correct: "Mol" },
      { question: "O que é um ácido?", choices: ["Substância que libera íons H+ em solução", "Substância que libera íons OH- em solução", "Substância que não reage em solução", "Substância que se dissolve completamente em água"], correct: "Substância que libera íons H+ em solução" },
      { question: "Qual elemento químico é essencial para a formação da água?", choices: ["Oxigênio", "Carbono", "Nitrogênio", "Hidrogênio"], correct: "Hidrogênio" },
      { question: "Qual é a fórmula química do gás carbônico?", choices: ["CO2", "CO", "O2", "H2O"], correct: "CO2" },
      { question: "O que é uma reação de oxirredução?", choices: ["Reação onde ocorre transferência de elétrons", "Reação de formação de precipitado", "Reação que gera calor", "Reação onde ocorre dissolução de gases"], correct: "Reação onde ocorre transferência de elétrons" },
      { question: "O que é um sal?", choices: ["Produto de reação entre ácido e base", "Produto de reação entre um metal e um não-metal", "Substância que não reage em solução", "Substância que não se dissolve em água"], correct: "Produto de reação entre ácido e base" },
      { question: "Qual é a diferença entre dissolução e reação química?", choices: ["Dissolução não envolve transformação da substância", "Reação química não ocorre em soluções", "Dissolução gera novos compostos", "Reação química não altera as substâncias originais"], correct: "Dissolução não envolve transformação da substância" }
    ]
  };
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const question = questions.chemistry[currentQuestion];
    document.getElementById("question-container").innerHTML = `
      <h2>${question.question}</h2>
      <ul>
        ${question.choices.map(choice => `<li><button onclick="checkAnswer('${choice}')">${choice}</button></li>`).join('')}
      </ul>
    `;
  }
  
  function checkAnswer(selected) {
    const question = questions.chemistry[currentQuestion];
    let feedback = "";
    if (selected === question.correct) {
      score += 10;
      feedback = "Resposta correta! Você ganhou 10 pontos.";
    } else {
      feedback = "Resposta incorreta seu burro! Tente novamente.";
    }
    showDialog(feedback);
  
    currentQuestion++;
    if (currentQuestion < questions.chemistry.length) {
      loadQuestion();
    } else {
      showDialog("Você completou todas as perguntas de Química!");
    }
  
    document.getElementById("score").innerText = score;
  }
  
  function showDialog(message) {
    const dialog = document.getElementById("dialog-box");
    const content = document.getElementById("dialog-content");
    content.innerText = message;
    dialog.style.display = "block";
  }
  
  function closeDialog() {
    const dialog = document.getElementById("dialog-box");
    dialog.style.display = "none";
  }
  
  window.onload = loadQuestion;
  