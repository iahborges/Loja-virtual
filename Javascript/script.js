document.addEventListener('DOMContentLoaded', () => {
  // Captura os elementos DOM necessários
  const mathProblem = document.getElementById('math-problem');
  const captchaInput = document.getElementById('captcha');
  const form = document.getElementById('security-form');
  const resultMessage = document.getElementById('result-message');
  
  // Geração do problema matemático
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const correctAnswer = num1 + num2;
  
  // Exibe o problema na tela
  mathProblem.textContent = `${num1} + ${num2} =`;

  // Lógica para validação do formulário
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio do formulário

    // Verifica se a resposta do captcha está correta
    if (parseInt(captchaInput.value) === correctAnswer) {
      resultMessage.textContent = 'Resposta correta! Obrigado por se inscrever.';
      resultMessage.style.color = 'green';
    } else {
      resultMessage.textContent = 'Resposta incorreta. Tente novamente.';
      resultMessage.style.color = 'red';
    }
  });

  // Menu de navegação: alterna a visibilidade
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  if (menuIcon && menu) {
    menuIcon.addEventListener('click', () => {
      menu.classList.toggle('open');
    });
  }

  // Alterna a classe 'responsive' no menu de navegação
  function toggleMenu() {
    const nav = document.querySelector('.navbar-nav');
    if (nav) {
      nav.classList.toggle('responsive');
    }
  }

  // Chama a função toggleMenu quando o menu icon for clicado
  if (menuIcon) {
    menuIcon.addEventListener('click', toggleMenu);
  }
});
  