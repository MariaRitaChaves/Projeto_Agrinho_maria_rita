function showSection(id) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.style.display = 'none';
  });
  const section = document.getElementById(id);
  if (section) {
    section.style.display = 'block';
  }
}

// Mostra a página inicial ao carregar
window.onload = () => showSection('home');

function checkAnswer(button, isCorrect) {
  const buttons = button.parentElement.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.disabled = true;
    btn.style.opacity = 0.7;
  });

  if (isCorrect) {
    button.style.backgroundColor = '#4caf50'; // verde
    alert("Resposta correta! 🌱");
  } else {
    button.style.backgroundColor = '#e57373'; // vermelho
    alert("Ops! Essa não é a resposta certa.");
  }
}