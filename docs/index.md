---
layout: page
---

<div class="custom-hero">
  <img src="/logos/guithome_horizontal_positiva.png" alt="Guilherme Thomé" class="hero-logo">
  <p class="hero-tagline">Médico Executivo e Consultor | Especialista em Value-Based Care | Fundador Grupo CSV - AxiaCare® • MedValor® • Thera®</p>
  <div class="hero-actions">
    <a href="/cv" class="hero-btn primary">Currículo</a>
    <a href="https://www.linkedin.com/in/gui-thome" class="hero-btn secondary" target="_blank">LinkedIn</a>
  </div>
</div>

<div class="custom-features">
  <a href="https://hub.grupocsv.com" class="feature-card" target="_blank">
    <h3>Grupo CSV</h3>
    <p>Ecossistema empresarial focado em Cuidados em Saúde com Valor. Consultoria, educação e tecnologia integradas.</p>
    <span class="feature-link">Acessar Hub →</span>
  </a>
  <a href="https://blog.guithome.com.br" class="feature-card" target="_blank">
    <h3>Blog</h3>
    <p>Artigos e reflexões sobre gestão em saúde, value-based healthcare e liderança executiva.</p>
    <span class="feature-link">Ler artigos →</span>
  </a>
  <a href="/medvalor/" class="feature-card">
    <h3>Marketing Digital</h3>
    <p>Materiais institucionais, apresentações e recursos para comunicação e marketing.</p>
    <span class="feature-link">Acessar →</span>
  </a>
</div>

<div class="ecosystem-section">
  <h2 class="ecosystem-title">Ecossistema Grupo CSV</h2>
  <p class="ecosystem-subtitle">Cuidados em Saúde com Valor</p>
  <img src="/triangulo_csv.png" alt="Triângulo do Grupo CSV" class="ecosystem-image">
</div>

<footer class="custom-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <img src="/logos/guithome_horizontal_monocromatica_negativa.png" alt="Guilherme Thomé" class="footer-logo">
      <p class="footer-tagline">Médico Executivo e Consultor<br>Especialista em Value-Based Care</p>
    </div>
    
    <div class="footer-links">
      <div class="footer-column">
        <h4>Portais</h4>
        <a href="https://hub.guithome.com.br">Hub Pessoal</a>
        <a href="https://hub.grupocsv.com">Hub Grupo CSV</a>
        <a href="https://blog.guithome.com.br">Blog</a>
        <a href="/cv">Currículo Digital</a>
      </div>
      
      <div class="footer-column">
        <h4>Grupo CSV</h4>
        <a href="https://axiacare.com.br">AxiaCare - Consultoria</a>
        <a href="https://medvalor.com.br">MedValor - Educação</a>
        <a href="https://thera.tech">Thera - Tecnologia</a>
      </div>
      
      <div class="footer-column">
        <h4>Contato</h4>
        <a href="mailto:guilherme@guithome.com.br">guilherme@guithome.com.br</a>
        <a href="https://www.linkedin.com/in/gui-thome">LinkedIn</a>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-empresas">
        <span>AxiaCare®</span>
        <span class="separator">•</span>
        <span>MedValor®</span>
        <span class="separator">•</span>
        <span>Thera®</span>
      </div>
      <p class="footer-copyright">© 2026 Guilherme Thomé. Todos os direitos reservados.</p>
      <p class="footer-compliance">
        <a href="https://hub.grupocsv.com/compliance/">Compliance</a> | 
        <a href="https://hub.grupocsv.com/compliance/privacidade">Privacidade</a>
      </p>
    </div>
  </div>
</footer>

<style>
/* Hide default VitePress elements on this page */
.VPDoc .container { max-width: 100% !important; padding: 0 !important; }
.VPDoc .content { max-width: 100% !important; padding: 0 !important; }
.VPDoc .content-container { max-width: 100% !important; }
.vp-doc { padding: 0 !important; }
.VPFooter { display: none !important; }
.aside { display: none !important; }

/* Custom Hero */
.custom-hero {
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

.hero-btn {
  display: inline-block;
  padding: 14px 36px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  transition: all 0.25s ease;
}

.hero-btn.primary {
  background: linear-gradient(135deg, #196396 0%, #0d4a73 100%);
  color: #ffffff;
  box-shadow: 0 4px 14px rgba(25, 99, 150, 0.25);
}

.hero-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(25, 99, 150, 0.35);
}

.hero-btn.secondary {
  border: 1.5px solid #196396;
  color: #196396;
  background: transparent;
}

.hero-btn.secondary:hover {
  background: rgba(25, 99, 150, 0.08);
}

/* Custom Features */
.custom-features {
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

.feature-link {
  font-weight: 600;
  color: #196396;
  font-size: 0.95rem;
}

/* Ecosystem Section */
.ecosystem-section {
  text-align: center;
  padding: 60px 24px 80px;
  background: linear-gradient(180deg, var(--vp-c-bg) 0%, var(--vp-c-bg-soft) 100%);
}

.ecosystem-title {
  font-size: 2rem;
  font-weight: 700;
  color: #196396;
  margin: 0 0 8px 0;
  letter-spacing: -0.02em;
}

.ecosystem-subtitle {
  font-size: 1.1rem;
  color: var(--vp-c-text-2);
  margin: 0 0 40px 0;
}

.ecosystem-image {
  max-width: 800px;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 4px 20px rgba(25, 99, 150, 0.1));
}

/* Custom Footer */
.custom-footer {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #0d4a73 100%);
  color: #ffffff;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
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

.footer-tagline {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 48px;
}

.footer-column h4 {
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #2DBF7F;
  margin: 0 0 20px 0;
}

.footer-column a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.2s ease;
}

.footer-column a:hover {
  color: #ffffff;
  padding-left: 8px;
}

.footer-bottom {
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-empresas {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  font-size: 1rem;
  font-weight: 500;
}

.footer-empresas .separator {
  color: #2DBF7F;
}

.footer-copyright {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin: 0 0 12px 0;
}

.footer-compliance {
  font-size: 0.85rem;
  margin: 0;
}

.footer-compliance a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
}

.footer-compliance a:hover {
  color: #2DBF7F;
}

/* Responsive */
@media (max-width: 960px) {
  .custom-features {
    grid-template-columns: repeat(2, 1fr);
  }
  .footer-links {
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
  .custom-features {
    grid-template-columns: 1fr;
  }
  .ecosystem-title {
    font-size: 1.5rem;
  }
  .ecosystem-image {
    max-width: 500px;
  }
  .footer-links {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .footer-column a:hover {
    padding-left: 0;
  }
}

@media (max-width: 480px) {
  .custom-hero {
    padding: 60px 16px 40px;
  }
  .hero-logo {
    max-width: 260px;
  }
  .hero-btn {
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
