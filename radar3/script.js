// Inicializa o EmailJS. Substitua 'YOUR_USER_ID' pelo ID gerado em sua conta.
// Para mais detalhes veja https://www.emailjs.com/docs/sdk/installation/
emailjs.init('YOUR_USER_ID');

const form = document.getElementById('radarForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';

  // Concatena todo o conteúdo dos campos de texto em uma única string
  const comentarios = Array.from(document.querySelectorAll('textarea'))
    .map((t) => t.value.trim())
    .filter((t) => t)
    .join('\n');

  const templateParams = {
    to_email: document.getElementById('email').value,
    data_avaliacao: document.getElementById('dataAvaliacao').value,
    equipe: document.getElementById('equipe').value,
    avaliador: document.getElementById('avaliador').value,
    periodicidade: document.getElementById('periodicidade').value,
    comentarios,
  };

  emailjs
    .send(serviceID, templateID, templateParams)
    .then(() => alert('E-mail enviado com sucesso!'))
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
      alert('Falha no envio. Verifique os dados e tente novamente.');
    });
});
