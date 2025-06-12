function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
    if (id === 'quiz') startQuiz();
  }
}

window.onload = () => showSection('home');

// ----- QUIZ DINÂMICO -----
const questions = [
  {
    question: "O que é agricultura sustentável?",
    answers: [
      { text: "Uso de técnicas que preservam o meio ambiente", correct: true },
      { text: "Uso de agrotóxicos para aumentar a produção", correct: false },
      { text: "Desmatamento para plantar mais", correct: false }
    ]
  },
  {
    question: "Qual destas ações é sustentável?",
    answers: [
      { text: "Queimar restos de plantação", correct: false },
      { text: "Usar energia solar nas fazendas", correct: true },
      { text: "Desperdiçar água na irrigação", correct: false }
    ]
  },
  {
    question: "O que é a rotação de culturas?",
    answers: [
      { text: "Plantar só milho o ano todo", correct: false },
      { text: "Trocar lavoura por gado", correct: false },
      { text: "Alternar diferentes plantas para equilibrar o solo", correct: true }
    ]
  },
  {
    question: "Qual o papel da tecnologia na sustentabilidade?",
    answers: [
      { text: "Ajudar a produzir mais com menos impacto ambiental", correct: true },
      { text: "Substituir totalmente o trabalho humano", correct: false },
      { text: "Aumentar o consumo de recursos naturais", correct: false }
    ]
  },
  {
    question: "Por que preservar matas ciliares é importante?",
    answers: [
      { text: "Proteger rios e nascentes contra erosão e poluição", correct: true },
      { text: "Para cortar madeira sempre que quiser", correct: false },
      { text: "Para plantar mais perto dos rios", correct: false }
    ]
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  document.getElementById("quiz-result").style.display = "none";
  document.getElementById("quiz-container").style.display = "block";
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question-text").textContent = `${currentQuestion + 1}. ${q.question}`;
  const answerContainer = document.getElementById("answer-buttons");
  answerContainer.innerHTML = "";

  q.answers.forEach((answer) => {
    const btn = document.createElement("button");
    btn.textContent = answer.text;
    btn.className = "explore-button";
    btn.onclick = () => selectAnswer(btn, answer.correct);
    answerContainer.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(button, correct) {
  const buttons = document.querySelectorAll("#answer-buttons button");
  buttons.forEach(btn => btn.disabled = true);

  if (correct) {
    button.style.backgroundColor = "#4caf50";
    score++;
  } else {
    button.style.backgroundColor = "#e57373";
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  document.getElementById("quiz-result").style.display = "block";
  document.getElementById("result-text").textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
  showSection("quiz");
}
