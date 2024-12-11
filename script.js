document.addEventListener('DOMContentLoaded', () => {
    const mathProblem = document.getElementById('math-problem');
    const captchaInput = document.getElementById('captcha');
    const form = document.getElementById('security-form');
    const resultMessage = document.getElementById('result-message');
  
    
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswer = num1 + num2;
    mathProblem.textContent = `${num1} + ${num2} =`;
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      if (parseInt(captchaInput.value) === correctAnswer) {
        resultMessage.textContent = 'Resposta correta!';
        resultMessage.style.color = 'green';
      } else {
        resultMessage.textContent = 'Resposta incorreta. Tente novamente.';
        resultMessage.style.color = 'red';
      }
    });
  });
 
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  
  menuIcon.addEventListener('click', () => {
    menu.classList.toggle('open');
  });