<script setup>
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <img src="/logos/guithome_horizontal_positiva.png" alt="Guilherme Thomé" class="hero-logo">
      <p class="hero-tagline">Médico Executivo e Consultor | Especialista em Value-Based Care | Fundador Grupo CSV - AxiaCare® • MedValor® • Thera®</p>
      <div class="hero-actions">
        <a href="/cv" class="btn primary">Currículo</a>
        <a href="https://www.linkedin.com/in/gui-thome" class="btn secondary" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <a href="https://hub.grupocsv.com" class="feature-card" target="_blank" rel="noopener">
        <h3>Grupo CSV</h3>
        <p>Ecossistema empresarial focado em Cuidados em Saúde com Valor. Consultoria, educação e tecnologia integradas.</p>
        <span class="link">Acessar Hub →</span>
      </a>
      <a href="https://blog.guithome.com.br" class="feature-card" target="_blank" rel="noopener">
        <h3>Blog</h3>
        <p>Artigos e reflexões sobre gestão em saúde, value-based healthcare e liderança executiva.</p>
        <span class="link">Ler artigos →</span>
      </a>
      <a href="/medvalor/" class="feature-card">
        <h3>Marketing Digital</h3>
        <p>Materiais institucionais, apresentações e recursos para comunicação e marketing.</p>
        <span class="link">Acessar →</span>
      </a>
    </section>

    <!-- Ecosystem Section -->
    <section class="ecosystem">
      <h2>Ecossistema Grupo CSV</h2>
      <p class="subtitle">Cuidados em Saúde com Valor</p>
      <img src="/triangulo_csv.png" alt="Triângulo do Grupo CSV" class="ecosystem-img">
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-brand">
          <img src="/logos/guithome_horizontal_monocromatica_negativa.png" alt="Guilherme Thomé" class="footer-logo">
          <p>Médico Executivo e Consultor<br>Especialista em Value-Based Care</p>
        </div>
        
        <div class="footer-grid">
          <div class="footer-col">
            <h4>Portais</h4>
            <a href="https://hub.guithome.com.br">Hub Pessoal</a>
            <a href="https://hub.grupocsv.com">Hub Grupo CSV</a>
            <a href="https://blog.guithome.com.br">Blog</a>
            <a href="/cv">Currículo Digital</a>
          </div>
          
          <div class="footer-col">
            <h4>Grupo CSV</h4>
            <a href="https://axiacare.com.br">AxiaCare - Consultoria</a>
            <a href="https://medvalor.com.br">MedValor - Educação</a>
            <a href="https://thera.tech">Thera - Tecnologia</a>
          </div>
          
          <div class="footer-col">
            <h4>Contato</h4>
            <a href="mailto:guilherme@guithome.com.br">guilherme@guithome.com.br</a>
            <a href="https://www.linkedin.com/in/gui-thome">LinkedIn</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="brands">
            <span>AxiaCare®</span>
            <span class="dot">•</span>
            <span>MedValor®</span>
            <span class="dot">•</span>
            <span>Thera®</span>
          </div>
          <p class="copyright">© 2026 Guilherme Thomé. Todos os direitos reservados.</p>
          <p class="compliance">
            <a href="https://hub.grupocsv.com/compliance/">Compliance</a> | 
            <a href="https://hub.grupocsv.com/compliance/privacidade">Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.home-page {
  width: 100%;
}

/* Hero */
.hero {
  text-align: center;
  padding: 80px 24px 60px;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

.hero-logo {
  max-width: 450px;
  width: 100%;
  height: auto;
  margin-bottom: 32px;
}

.hero-tagline {
  font-size: 1.15rem;
  color: var(--vp-c-text-2);
  max-width: 800px;
  margin: 0 auto 40px;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.btn.primary {
  background: linear-gradient(135deg, #196396 0%, #0d4a73 100%);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(25, 99, 150, 0.25);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 99, 150, 0.35);
}

.btn.secondary {
  border: 1.5px solid #196396;
  color: #196396;
  background: transparent;
}

.btn.secondary:hover {
  background: rgba(25, 99, 150, 0.08);
}

/* Features */
.features {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px 60px;
}

.feature-card {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 16px;
  padding: 28px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #196396;
  box-shadow: 0 8px 30px rgba(25, 99, 150, 0.1);
  transform: translateY(-4px);
}

.feature-card h3 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0 0 12px 0;
}

.feature-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 16px 0;
}

.feature-card .link {
  font-weight: 600;
  color: #196396;
  font-size: 0.95rem;
}

/* Ecosystem */
.ecosystem {
  text-align: center;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

.ecosystem h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #196396;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
  border: none;
}

.ecosystem .subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin: 0 0 40px 0;
}

.ecosystem-img {
  max-width: 800px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 20px rgba(25, 99, 150, 0.1));
}

/* Footer */
.footer {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #0d4a73 100%);
  color: #ffffff;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 24px 40px;
}

.footer-brand {
  text-align: center;
  margin-bottom: 48px;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-logo {
  height: 60px;
  width: auto;
  margin-bottom: 16px;
}

.footer-brand p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 48px;
}

.footer-col h4 {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2DBF7F;
  margin: 0 0 20px 0;
}

.footer-col a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.2s ease;
}

.footer-col a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-bottom {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.brands {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 500;
}

.brands .dot {
  color: #2DBF7F;
}

.copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 12px 0;
}

.compliance {
  font-size: 0.85rem;
  margin: 0;
}

.compliance a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.compliance a:hover {
  color: #2DBF7F;
}

/* Responsive */
@media (max-width: 960px) {
  .features {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .hero-logo {
    max-width: 320px;
  }
  .hero-tagline {
    font-size: 1rem;
  }
  .features {
    grid-template-columns: 1fr;
  }
  .ecosystem h2 {
    font-size: 1.5rem;
  }
  .ecosystem-img {
    max-width: 500px;
  }
  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-col a:hover {
    padding-left: 0;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 60px 16px 40px;
  }
  .hero-logo {
    max-width: 260px;
  }
  .btn {
    padding: 12px 28px;
    font-size: 14px;
  }
  .footer-container {
    padding: 40px 16px 32px;
  }
  .footer-logo {
    height: 48px;
  }
}
</style>
