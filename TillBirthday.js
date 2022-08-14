const resultDiv = document.getElementById('tillBirthdayResult');
document
  .getElementById('tillBirthday')
  .addEventListener('blur', ({ target }) => {
    const birthDate = new Date(Date.parse(target.value)).setFullYear(
      new Date().getFullYear()
    );
    const now = new Date();
    const diffDate = birthDate - now;
    const diffDays = Math.ceil(diffDate / (1000 * 60 * 60 * 24));
    resultDiv.textContent = `${diffDays > 0 ? diffDays : 365 + diffDays} days`;
  });
