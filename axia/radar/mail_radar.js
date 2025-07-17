window.addEventListener('DOMContentLoaded', () => {
  // 1) Pre‑popular data com a data atual
  const dataField = document.getElementById('dataAvaliacao');
  if (dataField && !dataField.value) {
    dataField.value = new Date().toISOString().slice(0, 10);
  }

  const button = document.querySelector('#emailRadar');
  if (!button) return;

  button.addEventListener('click', () => {
    // 2) Validação de campos obrigatórios
    const requiredFields = [
      { el: dataField, name: 'Data da Avaliação' },
      { el: document.getElementById('equipe'), name: 'Equipe' },
      { el: document.getElementById('avaliador'), name: 'Avaliador' },
    ];
    for (const field of requiredFields) {
      if (!field.el.value.trim()) {
        alert(`Por favor, preencha o campo: ${field.name}.`);
        field.el.focus();
        return;
      }
    }

    const destinatario = 'guilherme@axcare.com.br';
    const data = dataField.value;
    const equipe = document.getElementById('equipe').value.trim();
    const avaliador = document.getElementById('avaliador').value.trim();

    // 3) Pareamento exato: colunas A vs colunas E
    const colA = Array.from(document.querySelectorAll('.group .column:first-child textarea'));
    const colE = Array.from(document.querySelectorAll('.group .column:last-child textarea'));

    const assunto = `RADAR³ | ${equipe} | ${data}`;
    let corpo = `${assunto}\n${avaliador}\n\n`;

    // 4) Estrutura dos blocos, assumindo que cada coluna tem 15 textareas (5 grupos x 3 items)
    const titulos = [
      'RELATOS RELEVANTES',
      'ABERTOS IMPORTANTES',
      'DIRECIONADORES DE IMPACTO',
      'AGENDA E ARTICULAÇÕES',
      'RISCOS E REFLEXÕES ESTRATÉGICAS'
    ];

    for (let g = 0; g < titulos.length; g++) {
      corpo += `${titulos[g]}:\n`;
      for (let i = 0; i < 3; i++) {
        const idx = g * 3 + i;
        const valA = colA[idx]?.value.trim() || '-';
        const valE = colE[idx]?.value.trim() || '-';
        corpo += `${idx+1}a - ${valA}\n`;
        corpo += `${idx+1}e - ${valE}\n`;
      }
      corpo += '\n';
    }

    // 5) Monta e abre mailto
    const mailtoLink = `mailto:${destinatario}`
      + `?subject=${encodeURIComponent(assunto)}`
      + `&body=${encodeURIComponent(corpo)}`;
    window.location.href = mailtoLink;
  });
});
