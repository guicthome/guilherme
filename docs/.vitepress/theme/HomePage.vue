<script setup>
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <img src="/logos/guithome_horizontal_positiva.png" alt="Guilherme Thomé" class="hero-logo">
        <p class="hero-tagline">
          Médico Executivo e Consultor | Especialista em Value-Based Care<br>
          Fundador Grupo CSV - AxiaCare® • MedValor® • TheraTech®
        </p>
        <div class="hero-actions">
          <a href="/cv" class="btn primary">Currículo</a>
          <a href="https://www.linkedin.com/in/gui-thome" class="btn secondary" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="features-container">
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
      </div>
    </section>

    <!-- Ecosystem Section -->
    <section class="ecosystem">
      <div class="ecosystem-content">
        <h2>Ecossistema Grupo CSV</h2>
        <p class="subtitle">Cuidados em Saúde com Valor</p>
        <div class="ecosystem-img-wrapper">
          <img src="/triangulo_csv.png" alt="Triângulo do Grupo CSV" class="ecosystem-img">
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="/logos/guithome_horizontal_monocromatica_negativa.png" alt="Guilherme Thomé" class="footer-logo">
            <p>Médico Executivo e Consultor<br>Especialista em Value-Based Care</p>
          </div>
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
            <a href="https://www.linkedin.com/in/gui-thome" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="brands">
            <span>AxiaCare®</span>
            <span class="dot">•</span>
            <span>MedValor®</span>
            <span class="dot">•</span>
            <span>TheraTech®</span>
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
/* Reset and Base */
.home-page {
  width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

/* ========================================================================
   HERO SECTION
   ======================================================================== */
.hero {
  width: 100%;
  padding: 80px 24px 70px;
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  max-width: 900px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.hero-logo {
  max-width: 420px;
  width: 85%;
  height: auto;
  margin: 0 auto 36px;
  display: block;
}

.hero-tagline {
  font-size: 1.1rem;
  color: #4a5568;
  line-height: 1.8;
  margin: 0 auto 44px;
  max-width: 700px;
}

.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 40px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;
  min-width: 150px;
}

.btn.primary {
  background: linear-gradient(135deg, #196396 0%, #0d4a73 100%);
  color: #ffffff;
  box-shadow: 0 4px 16px rgba(25, 99, 150, 0.3);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 24px rgba(25, 99, 150, 0.4);
}

.btn.secondary {
  border: 2px solid #196396;
  color: #196396;
  background: transparent;
}

.btn.secondary:hover {
  background: #196396;
  color: #ffffff;
}

/* ========================================================================
   FEATURES SECTION
   ======================================================================== */
.features {
  width: 100%;
  padding: 60px 24px 70px;
  background: #ffffff;
  display: flex;
  justify-content: center;
}

.features-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.feature-card {
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
  background: #f8fafc;
  text-decoration: none;
  transition: all 0.3s ease;
}

.feature-card:hover {
  border-color: #196396;
  box-shadow: 0 12px 40px rgba(25, 99, 150, 0.12);
  transform: translateY(-6px);
}

.feature-card h3 {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 14px 0;
}

.feature-card p {
  font-size: 0.95rem;
  color: #4a5568;
  line-height: 1.65;
  margin: 0 0 20px 0;
  flex-grow: 1;
}

.feature-card .link {
  font-weight: 600;
  color: #196396;
  font-size: 0.95rem;
}

/* ========================================================================
   ECOSYSTEM SECTION
   ======================================================================== */
.ecosystem {
  width: 100%;
  padding: 70px 24px 90px;
  background: linear-gradient(180deg, #f8fafc 0%, #edf2f7 100%);
  display: flex;
  justify-content: center;
}

.ecosystem-content {
  max-width: 1000px;
  width: 100%;
  text-align: center;
  margin: 0 auto;
}

.ecosystem h2 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #196396;
  margin: 0 0 12px 0;
  letter-spacing: -0.02em;
}

.ecosystem .subtitle {
  font-size: 1.15rem;
  color: #4a5568;
  margin: 0 0 50px 0;
}

.ecosystem-img-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.ecosystem-img {
  max-width: 750px;
  width: 90%;
  height: auto;
}

/* ========================================================================
   FOOTER
   ======================================================================== */
.footer {
  width: 100%;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #0d4a73 100%);
  color: #ffffff;
}

.footer-container {
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 24px 50px;
}

.footer-top {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding-bottom: 50px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  text-align: center;
}

.footer-logo {
  height: 56px;
  width: auto;
  margin-bottom: 18px;
}

.footer-brand p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.7;
  margin: 0;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px;
  margin-bottom: 50px;
  text-align: center;
}

.footer-col h4 {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #2DBF7F;
  margin: 0 0 22px 0;
}

.footer-col a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 9px 0;
  transition: color 0.2s ease;
}

.footer-col a:hover {
  color: #ffffff;
}

.footer-bottom {
  text-align: center;
  padding-top: 40px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.brands {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 22px;
  font-size: 1rem;
  font-weight: 600;
}

.brands .dot {
  color: #2DBF7F;
}

.copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 14px 0;
}

.compliance {
  font-size: 0.85rem;
  margin: 0;
}

.compliance a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
}

.compliance a:hover {
  color: #2DBF7F;
}

/* ========================================================================
   RESPONSIVE - TABLET (max-width: 960px)
   ======================================================================== */
@media (max-width: 960px) {
  .features-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
  
  .footer-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
  
  .ecosystem-img {
    max-width: 600px;
  }
}

/* ========================================================================
   RESPONSIVE - MOBILE LANDSCAPE (max-width: 768px)
   ======================================================================== */
@media (max-width: 768px) {
  .hero {
    padding: 60px 20px 55px;
  }
  
  .hero-logo {
    max-width: 320px;
    margin-bottom: 28px;
  }
  
  .hero-tagline {
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
  }
  
  .hero-actions {
    gap: 14px;
  }
  
  .btn {
    padding: 13px 32px;
    font-size: 14px;
    min-width: 130px;
  }
  
  .features {
    padding: 50px 20px 55px;
  }
  
  .features-container {
    grid-template-columns: 1fr;
    gap: 18px;
  }
  
  .feature-card {
    padding: 26px;
  }
  
  .ecosystem {
    padding: 55px 20px 70px;
  }
  
  .ecosystem h2 {
    font-size: 1.7rem;
  }
  
  .ecosystem .subtitle {
    font-size: 1.05rem;
    margin-bottom: 40px;
  }
  
  .ecosystem-img {
    width: 95%;
  }
  
  .footer-container {
    padding: 55px 20px 40px;
  }
  
  .footer-top {
    margin-bottom: 40px;
    padding-bottom: 40px;
  }
  
  .footer-logo {
    height: 48px;
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
  
  .footer-bottom {
    padding-top: 32px;
  }
}

/* ========================================================================
   RESPONSIVE - MOBILE PORTRAIT (max-width: 480px)
   ======================================================================== */
@media (max-width: 480px) {
  .hero {
    padding: 48px 16px 45px;
  }
  
  .hero-logo {
    max-width: 260px;
    margin-bottom: 24px;
  }
  
  .hero-tagline {
    font-size: 0.92rem;
    line-height: 1.65;
    margin-bottom: 32px;
  }
  
  .hero-actions {
    flex-direction: column;
    gap: 12px;
  }
  
  .btn {
    width: 100%;
    max-width: 240px;
    padding: 14px 28px;
  }
  
  .features {
    padding: 40px 16px 45px;
  }
  
  .features-container {
    gap: 14px;
  }
  
  .feature-card {
    padding: 22px;
    border-radius: 12px;
  }
  
  .feature-card h3 {
    font-size: 1.05rem;
  }
  
  .feature-card p {
    font-size: 0.9rem;
  }
  
  .ecosystem {
    padding: 45px 16px 60px;
  }
  
  .ecosystem h2 {
    font-size: 1.45rem;
  }
  
  .ecosystem .subtitle {
    font-size: 0.95rem;
    margin-bottom: 32px;
  }
  
  .footer-container {
    padding: 45px 16px 35px;
  }
  
  .footer-top {
    margin-bottom: 35px;
    padding-bottom: 35px;
  }
  
  .footer-logo {
    height: 42px;
  }
  
  .footer-brand p {
    font-size: 0.9rem;
  }
  
  .footer-grid {
    gap: 30px;
  }
  
  .footer-col h4 {
    font-size: 0.75rem;
    margin-bottom: 18px;
  }
  
  .footer-col a {
    font-size: 0.9rem;
    padding: 7px 0;
  }
  
  .brands {
    gap: 12px;
    font-size: 0.9rem;
  }
  
  .copyright {
    font-size: 0.8rem;
  }
  
  .compliance {
    font-size: 0.8rem;
  }
}

/* ========================================================================
   RESPONSIVE - SMALL MOBILE (max-width: 360px)
   ======================================================================== */
@media (max-width: 360px) {
  .hero {
    padding: 40px 12px 38px;
  }
  
  .hero-logo {
    max-width: 220px;
  }
  
  .hero-tagline {
    font-size: 0.85rem;
  }
  
  .features {
    padding: 35px 12px 40px;
  }
  
  .feature-card {
    padding: 18px;
  }
  
  .ecosystem {
    padding: 38px 12px 50px;
  }
  
  .footer-container {
    padding: 38px 12px 30px;
  }
  
  .footer-logo {
    height: 38px;
  }
}

/* Dark mode adjustments */
.dark .hero {
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

.dark .hero-tagline {
  color: var(--vp-c-text-2);
}

.dark .features {
  background: var(--vp-c-bg);
}

.dark .feature-card {
  background: var(--vp-c-bg-soft);
  border-color: var(--vp-c-divider);
}

.dark .feature-card h3 {
  color: var(--vp-c-text-1);
}

.dark .feature-card p {
  color: var(--vp-c-text-2);
}

.dark .ecosystem {
  background: linear-gradient(180deg, var(--vp-c-bg-soft) 0%, var(--vp-c-bg-alt) 100%);
}

.dark .ecosystem .subtitle {
  color: var(--vp-c-text-2);
}
</style>
