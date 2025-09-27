# Coders.ia Blog

Um blog moderno sobre desenvolvimento, inteligência artificial e tecnologia, construído com Astro e TailwindCSS.

## 🚀 Funcionalidades

- ✅ **Design Dark Mode** com tema minimalista e elegante
- ✅ **Performance otimizada** com Astro (Islands Architecture)
- ✅ **SEO completo** com meta tags e OpenGraph
- ✅ **RSS Feed** automático
- ✅ **Sistema de categorias** organizadas
- ✅ **Compartilhamento social** (Twitter, LinkedIn, WhatsApp)
- ✅ **Responsivo** para todos os dispositivos
- ✅ **TypeScript** para type safety
- ✅ **Content Collections** para posts em Markdown
- ✅ **Deploy pronto** para Vercel/Netlify

## 🛠️ Stack Tecnológica

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Typography**: [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- **Language**: TypeScript
- **Content**: Markdown com frontmatter
- **Deployment**: Vercel/Netlify ready

## 📁 Estrutura do Projeto

```
/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── content/
│   │   ├── config.ts
│   │   └── blog/
│   │       ├── introducao-astro-framework.md
│   │       ├── ia-no-desenvolvimento-2024.md
│   │       ├── ferramentas-produtividade-dev.md
│   │       ├── tailwind-css-guia-completo.md
│   │       └── devops-docker-kubernetes.md
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── sobre.astro
│       ├── rss.xml.js
│       ├── blog/
│       │   └── [...slug].astro
│       └── categorias/
│           ├── index.astro
│           └── [categoria].astro
├── astro.config.mjs
├── tailwind.config.mjs
└── tsconfig.json
```

## 🚀 Início Rápido

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <your-repo-url>
cd blog-astro

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:4321 no seu navegador
```

### Comandos Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run start        # Alias para dev

# Build de produção
npm run build        # Constrói o site para produção
npm run preview      # Preview do build de produção

# Utilitários
npm run astro        # CLI do Astro
```

## ✍️ Criando Novos Posts

1. Crie um novo arquivo `.md` em `src/content/blog/`
2. Adicione o frontmatter necessário:

```markdown
---
title: "Título do Seu Post"
description: "Descrição que aparece no preview e SEO"
date: 2024-09-22
category: "Categoria"
author: "Seu Nome"
tags: ["tag1", "tag2", "tag3"]
draft: false
---

# Seu conteúdo aqui

Escreva seu post em Markdown...
```

### Categorias Disponíveis

- Desenvolvimento Web
- Inteligência Artificial
- DevOps
- Ferramentas

## 🎨 Customização

### Cores e Tema

Edite `tailwind.config.mjs` para personalizar as cores:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Suas cores primárias
      },
      accent: {
        // Suas cores de destaque
      }
    }
  }
}
```

### Layout e Componentes

- **BaseLayout.astro**: Layout base com header/footer
- **BlogPostLayout.astro**: Layout específico para posts
- Customize os componentes conforme necessário

## 🌐 Deploy

### Vercel

[![Deploy com Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/your-repo)

```bash
# Ou via CLI
npm i -g vercel
vercel
```

### Netlify

[![Deploy no Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/your-username/your-repo)

### GitHub Pages

```bash
# Build e deploy
npm run build
# Faça upload da pasta dist/ para o GitHub Pages
```

## 📊 SEO e Performance

### Recursos SEO incluídos:

- ✅ Meta tags otimizadas
- ✅ OpenGraph para redes sociais
- ✅ Twitter Cards
- ✅ Sitemap automático
- ✅ RSS Feed
- ✅ robots.txt
- ✅ URLs limpas e semânticas

### Performance:

- ✅ Bundle size otimizado (< 50KB)
- ✅ Images lazy loading
- ✅ CSS purging automático
- ✅ Preload crítico de recursos
- ✅ Core Web Vitals otimizados

## 🔧 Configurações Avançadas

### RSS Feed

O RSS é gerado automaticamente em `/rss.xml` com todos os posts publicados.

### Dark Mode

O tema escuro está habilitado por padrão. Para customizar:

```css
/* Adicione seus estilos em globals.css */
.dark {
  /* Suas customizações de dark mode */
}
```

### Analytics

Para adicionar analytics, edite `BaseLayout.astro`:

```astro
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙏 Agradecimentos

- [Astro](https://astro.build/) pelo incrível framework
- [TailwindCSS](https://tailwindcss.com/) pelo sistema de design
- [Vercel](https://vercel.com/) e [Netlify](https://netlify.com/) pelo hosting gratuito

---

**Desenvolvido com ❤️ pela equipe Coders.ia**

🔗 **Links Úteis:**
- [Documentação do Astro](https://docs.astro.build/)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 🐛 Suporte

Encontrou um bug ou tem uma sugestão? [Abra uma issue](https://github.com/your-username/your-repo/issues)!