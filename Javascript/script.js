document.addEventListener('DOMContentLoaded', () => {
  const mathProblem = document.getElementById('math-problem');
  const captchaInput = document.getElementById('captcha');
  const form = document.getElementById('security-form');
  const resultMessage = document.getElementById('result-message');

  function generateProblem() {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    mathProblem.textContent = `${num1} + ${num2}`;
    return num1 + num2;
  }

  let correctAnswer = generateProblem();

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userAnswer = parseInt(captchaInput.value, 10);

    if (userAnswer === correctAnswer) {
      resultMessage.textContent = 'Resposta correta! Obrigado.';
      resultMessage.style.color = 'green';
      form.reset();
    } else {
      resultMessage.textContent = 'Resposta incorreta. Tente novamente.';
      resultMessage.style.color = 'red';
    }

    correctAnswer = generateProblem();
  });
});