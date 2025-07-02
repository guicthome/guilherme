document.addEventListener('DOMContentLoaded', function() {
  if (typeof html2pdf === 'undefined') {
    const s = document.createElement('script');
    s.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
    s.integrity = 'sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==';
    s.crossOrigin = 'anonymous'; s.referrerPolicy = 'no-referrer';
    document.head.appendChild(s);
    s.onload = initPdfDownload;
  } else {
    initPdfDownload();
  }

  function initPdfDownload() {
    const btn = document.querySelector('#btnDownloadPdf');
    const container = document.querySelector('#radar-container');

    if (!btn || !container) return console.error('Botão ou container PDF não encontrados');

    btn.addEventListener('click', function() {
      const opt = {
        margin:       [0.5, 0.5, 0.5, 0.5],
        filename:     'RADAR3_Avaliacao_' + new Date().toISOString().slice(0,10) + '.pdf',
        enableLinks:  true,
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, backgroundColor: '#ffffff', scrollX: 0, scrollY: -window.scrollY },
        jsPDF:        { unit: 'cm', format: 'a4', orientation: 'portrait' },
        pagebreak:    { mode: 'css', before: '.page-break' }
      };

      html2pdf().set(opt).from(container)
        .toPdf()
        .get('pdf')
        .then(pdf => {
          const total = pdf.internal.getNumberOfPages();
          for (let i = 1; i <= total; i++) {
            pdf.setPage(i);
            pdf.setFontSize(10);
            pdf.setTextColor(150);
            pdf.text(`Página ${i} / ${total}`, pdf.internal.pageSize.getWidth() / 2, pdf.internal.pageSize.getHeight() - 1, { align: 'center' });
          }
        })
        .save()
        .catch(err => console.error('Falha ao gerar PDF:', err));
    });
  }
});
