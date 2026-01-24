import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Guilherme Thomé",
  description: "Médico Executivo e Consultor | Fundador Grupo CSV",
  lang: 'pt-BR',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: 'Guilherme Thomé | Portal Digital' }],
    ['meta', { property: 'og:image', content: 'https://i.imgur.com/TKziJpD.png' }],
  ],
  themeConfig: {
    siteTitle: 'Guilherme Thomé',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Currículo', link: '/cv' },
      { text: 'MedValor', link: '/medvalor/' },
      { text: 'Grupo CSV', link: 'https://hub.grupocsv.com' },
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/gui-thome' }
    ],
    footer: {
      message: 'Médico Executivo e Consultor | Fundador Grupo CSV',
      copyright: '© 2026 Guilherme Thomé'
    }
  }
})
