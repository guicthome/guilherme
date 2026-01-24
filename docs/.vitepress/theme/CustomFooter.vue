<script setup>
</script>

<template>
  <footer class="custom-footer">
    <div class="footer-container">
      <div class="footer-brand">
        <img src="/logos/guithome_horizontal_positiva.png" alt="Guilherme Thomé" class="footer-logo">
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
          <span>TheraTech®</span>
        </div>
        <p class="footer-copyright">© 2026 Guilherme Thomé. Todos os direitos reservados.</p>
        <p class="footer-compliance">
          <a href="https://hub.grupocsv.com/compliance/">Compliance</a> | 
          <a href="https://hub.grupocsv.com/compliance/privacidade">Privacidade</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.custom-footer {
  background: linear-gradient(135deg, #0d1b2a 0%, #1b3a4b 50%, #0d4a73 100%);
  color: #ffffff;
  padding: 0;
  margin-top: 0;
  width: 100%;
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
  filter: brightness(0) invert(1);
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
  margin-bottom: 20px;
}

.footer-column a {
  display: block;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 0.95rem;
  padding: 8px 0;
  transition: all 0.2s ease;
  border-bottom: 1px solid transparent;
}

.footer-column a:hover {
  color: #ffffff;
  padding-left: 8px;
  border-bottom-color: #2DBF7F;
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
  margin-bottom: 12px;
}

.footer-compliance {
  font-size: 0.85rem;
}

.footer-compliance a {
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-compliance a:hover {
  color: #2DBF7F;
}

@media (max-width: 960px) {
  .footer-links {
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}

@media (max-width: 768px) {
  .footer-links {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;
  }

  .footer-column a:hover {
    padding-left: 0;
  }

  .footer-empresas {
    flex-wrap: wrap;
    gap: 8px 16px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    padding: 40px 16px 32px;
  }

  .footer-logo {
    height: 48px;
  }
}
</style>
