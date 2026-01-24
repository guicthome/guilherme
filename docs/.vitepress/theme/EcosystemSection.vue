<script setup>
</script>

<template>
  <div class="ecosystem-section">
    <h2 class="ecosystem-title">Ecossistema Grupo CSV</h2>
    <p class="ecosystem-subtitle">Cuidados em Saúde com Valor</p>
    <img src="/triangulo_csv.png" alt="Triângulo do Grupo CSV - AxiaCare, MedValor e Thera" class="ecosystem-image">
  </div>
</template>

<style scoped>
.ecosystem-section {
  text-align: center;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
  margin-top: 40px;
}

.ecosystem-title {
  font-size: 2rem;
  font-weight: 700;
  color: #196396;
  margin-bottom: 8px;
  letter-spacing: -0.02em;
}

.ecosystem-subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin-bottom: 40px;
  font-weight: 400;
}

.ecosystem-image {
  max-width: 100%;
  width: 800px;
  height: auto;
  margin: 0 auto;
  display: block;
  filter: drop-shadow(0 4px 20px rgba(25, 99, 150, 0.1));
}

@media (max-width: 768px) {
  .ecosystem-title {
    font-size: 1.5rem;
  }

  .ecosystem-image {
    width: 100%;
    max-width: 500px;
  }
}

@media (max-width: 480px) {
  .ecosystem-section {
    padding: 40px 16px 60px;
  }
}
</style>
