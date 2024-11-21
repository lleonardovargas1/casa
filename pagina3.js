const questions = {
  biology: [
      { 
          question: "Qual é a unidade básica da vida?", 
          choices: ["Célula", "Tecido", "Órgão", "Organismo"], 
          correct: "Célula" 
      },
      { 
          question: "Qual organela celular é responsável pela produção de energia?", 
          choices: ["Mitocôndria", "Ribossomo", "Lisossomo", "Complexo de Golgi"], 
          correct: "Mitocôndria" 
      },
      { 
          question: "Como se chama o processo de conversão de energia luminosa em energia química nas plantas?", 
          choices: ["Fotossíntese", "Respiração celular", "Fermentação", "Quimiossíntese"], 
          correct: "Fotossíntese" 
      },
      { 
          question: "Qual macromolécula é responsável pelo armazenamento das informações genéticas?", 
          choices: ["DNA", "RNA", "Proteína", "Lipídeo"], 
          correct: "DNA" 
      },
      { 
          question: "Que estrutura permite o transporte de água nas plantas?", 
          choices: ["Xilema", "Floema", "Estômatos", "Raiz"], 
          correct: "Xilema" 
      },
      { 
          question: "Qual o nome do processo de divisão celular que forma gametas?", 
          choices: ["Meiose", "Mitose", "Fissão binária", "Citocinese"], 
          correct: "Meiose" 
      },
      { 
          question: "Como se chama a relação ecológica em que ambos os organismos se beneficiam?", 
          choices: ["Mutualismo", "Comensalismo", "Parasitismo", "Competição"], 
          correct: "Mutualismo" 
      },
      { 
          question: "Qual é o principal componente da parede celular das plantas?", 
          choices: ["Celulose", "Quitina", "Proteína", "Amido"], 
          correct: "Celulose" 
      },
      { 
          question: "Qual organela é responsável pela síntese de proteínas?", 
          choices: ["Ribossomo", "Lisossomo", "Núcleo", "Peroxissomo"], 
          correct: "Ribossomo" 
      },
      { 
          question: "Qual é o principal pigmento responsável pela captação de luz nas plantas?", 
          choices: ["Clorofila", "Carotenoides", "Xantofila", "Antocianina"], 
          correct: "Clorofila" 
      }
  ]
};

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const question = questions.biology[currentQuestion];
  document.getElementById("question-container").innerHTML = `
      <h2>${question.question}</h2>
      <ul>
          ${question.choices.map(choice => `<li><button onclick="checkAnswer('${choice}')">${choice}</button></li>`).join('')}
      </ul>
  `;
}

function checkAnswer(selected) {
  const question = questions.biology[currentQuestion];
  let feedback = "";
  if (selected === question.correct) {
      score += 10;
      feedback = "Resposta correta! Você ganhou 10 pontos.";
  } else {
      feedback = "Resposta incorreta. Tente novamente.";
  }
  showDialog(feedback);

  currentQuestion++;
  if (currentQuestion < questions.biology.length) {
      loadQuestion();
  } else {
      showDialog("Você completou todas as perguntas de Biologia!");
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
