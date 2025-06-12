function showSection(id) {
  const sections = document.querySelectorAll('.content-section');
  sections.forEach(section => {
    section.style.display = 'none';
  });

  const activeSection = document.getElementById(id);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}

// Mostrar a primeira seção por padrão
window.onload = () => showSection('agricultura');// Aqui você pode adicionar interações futuras, por exemplo, efeitos dinâmicos
console.log('Sustentabilidade no Campo - site interativo.');
