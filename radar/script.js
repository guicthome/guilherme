const form = document.getElementById('radarForm');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  window.location.href = `mailto:${email}?subject=RADAR%C2%B3%20Resultado&body=Resultados%20do%20RADAR%C2%B3`;
});
