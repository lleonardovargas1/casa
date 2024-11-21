
const questions = {
    physics: [
        { 
            question: "Qual é a unidade de medida da força no Sistema Internacional (SI)?", 
            choices: ["Newton", "Joule", "Watt", "Pascal"], 
            correct: "Newton" 
        },
        { 
            question: "Qual é a fórmula da segunda lei de Newton?", 
            choices: ["F = m * a", "F = m / a", "F = m + a", "F = a / m"], 
            correct: "F = m * a" 
        },
        { 
            question: "O que acontece com um corpo em movimento uniforme?", 
            choices: ["Velocidade constante", "Aceleração constante", "Força resultante não nula", "Mudança contínua de direção"], 
            correct: "Velocidade constante" 
        },
        { 
            question: "Qual é o valor aproximado da aceleração da gravidade na Terra?", 
            choices: ["9,8 m/s²", "10 m/s²", "8,9 m/s²", "15 m/s²"], 
            correct: "9,8 m/s²" 
        },
        { 
            question: "Qual grandeza física é definida como a razão entre deslocamento e tempo?", 
            choices: ["Velocidade", "Aceleração", "Força", "Impulso"], 
            correct: "Velocidade" 
        },
        { 
            question: "Qual é a unidade de medida da energia no SI?", 
            choices: ["Joule", "Watt", "Newton", "Kelvin"], 
            correct: "Joule" 
        },
        { 
            question: "O que é trabalho em física?", 
            choices: [
                "Energia transferida por uma força ao longo de um deslocamento",
                "Força aplicada sem movimento",
                "Energia armazenada em um sistema",
                "Transferência de calor entre corpos"
            ], 
            correct: "Energia transferida por uma força ao longo de um deslocamento" 
        },
        { 
            question: "Qual grandeza física é representada pela relação P = F / A?", 
            choices: ["Pressão", "Potência", "Velocidade", "Impulso"], 
            correct: "Pressão" 
        },
        { 
            question: "Qual é o princípio da conservação da energia?", 
            choices: [
                "A energia total de um sistema isolado é constante",
                "A energia nunca pode ser transformada",
                "A energia total sempre aumenta",
                "A energia é criada a partir do nada"
            ], 
            correct: "A energia total de um sistema isolado é constante" 
        },
        { 
            question: "Qual é a fórmula da energia cinética?", 
            choices: ["Ec = 1/2 * m * v²", "Ec = m * v", "Ec = m² * v", "Ec = m * a * v"], 
            correct: "Ec = 1/2 * m * v²" 
        }
    ]
};

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions.physics[currentQuestion];
    document.getElementById("question-container").innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.choices.map(choice => `<li><button onclick="checkAnswer('${choice}')">${choice}</button></li>`).join('')}
        </ul>
    `;
}

function checkAnswer(selected) {
    const question = questions.physics[currentQuestion];
    let feedback = "";
    if (selected === question.correct) {
        score += 10;
        feedback = "Resposta correta! Você ganhou 10 pontos.";
    } else {
        feedback = "Resposta incorreta. Tente novamente.";
    }
    showDialog(feedback);

    currentQuestion++;
    if (currentQuestion < questions.physics.length) {
        loadQuestion();
    } else {
        showDialog("Você completou todas as perguntas de Física!");
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