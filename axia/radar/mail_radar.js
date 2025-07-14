// RADAR³ - mail_radar.js

window.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Enviar RADAR³ por E-mail';
  button.type = 'button';
  button.className = 'btn-radar-mailto';

  const emailContainer = document.querySelector('.email-container');
  if (emailContainer) emailContainer.appendChild(button);

  button.addEventListener('click', () => {
    const destinatario = 'guilherme@axcare.com.br';
    const data = document.getElementById('dataAvaliacao').value;
    const equipe = document.getElementById('equipe').value;
    const avaliador = document.getElementById('avaliador').value;
    const textareas = Array.from(document.querySelectorAll('textarea'));

    const assunto = `RADAR³ | ${equipe} | ${data}`;
    let corpo = `${assunto}\n${avaliador}\n\n`;

    const blocos = [
      { titulo: 'RELATOS RELEVANTES', base: 0 },
      { titulo: 'ABERTOS IMPORTANTES', base: 6 },
      { titulo: 'DIRECIONADORES DE IMPACTO', base: 12 },
      { titulo: 'AGENDA E ARTICULAÇÕES', base: 18 },
      { titulo: 'RISCOS E REFLEXÕES ESTRATÉGICAS', base: 24 },
    ];

    for (const bloco of blocos) {
      corpo += `${bloco.titulo}:\n`;
      for (let i = 0; i < 3; i++) {
        const idxA = bloco.base + i;
        const idxE = bloco.base + i + 3;
        const valA = textareas[idxA]?.value.trim() || '-';
        const valE = textareas[idxE]?.value.trim() || '-';
        corpo += `${idxA + 1}a - ${valA}\n`;
        corpo += `${idxE + 1}e - ${valE}\n`;
      }
      corpo += '\n';
    }

    const mailtoLink = `mailto:${destinatario}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;
    window.location.href = mailtoLink;
  });
});
