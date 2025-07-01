// Inicializa o EmailJS. Substitua 'YOUR_USER_ID' pelo ID gerado em sua conta.
// Para mais detalhes veja https://www.emailjs.com/docs/sdk/installation/
emailjs.init('YOUR_USER_ID');

const form = document.getElementById('radarForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();


  const toEmail = document.getElementById('email').value;
  const dataAvaliacao = document.getElementById('dataAvaliacao').value;
  const equipe = document.getElementById('equipe').value;
  const avaliador = document.getElementById('avaliador').value;
  const periodicidade = document.getElementById('periodicidade').value;
  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';

  // Concatena todo o conteúdo dos campos de texto em uma única string

  const comentarios = Array.from(document.querySelectorAll('textarea'))
    .map((t) => t.value.trim())
    .filter((t) => t)
    .join('\n');

  const body =
    `Data Avaliação: ${dataAvaliacao}\n` +
    `Equipe: ${equipe}\n` +
    `Avaliador: ${avaliador}\n` +
    `Periodicidade: ${periodicidade}\n\n` +
    `Comentários:\n${comentarios}`;

  window.location.href =
    `mailto:${toEmail}?subject=RADAR%C2%B3%20Resultado&body=${encodeURIComponent(body)}`;
});

document.getElementById('downloadPDF').addEventListener('click', () => {
  html2canvas(document.body).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jspdf.jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('radar3.pdf');
  });
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