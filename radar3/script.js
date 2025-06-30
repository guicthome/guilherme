const form = document.getElementById('radarForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const data = document.getElementById('dataAvaliacao').value;
  const equipe = document.getElementById('equipe').value;
  const avaliador = document.getElementById('avaliador').value;
  const ciclo = document.getElementById('periodicidade').value;

  let body = `Data da Avaliação: ${data}\nEquipe Avaliada: ${equipe}\nAvaliador: ${avaliador}\nPeriodicidade: ${ciclo}\n\n`;

  const textareas = form.querySelectorAll('textarea');
  textareas.forEach((ta) => {
    body += `${ta.name}: ${ta.value}\n`;
  });

  const subject = encodeURIComponent('RADAR³™ Resultado');
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${email}?subject=${subject}&body=${encodedBody}`;
});
