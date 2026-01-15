# Portfólio – Amanda Trinity

Portfolio pessoal em React para apresentar projetos, habilidades e formação.

## 🧭 Visão Geral
- Landing page com header, sobre, habilidades, formação e projetos.
- Cartões de projeto com tags, links de código/demonstração.
- Estilização custom com CSS e tipografia Poppins; uso de MUI (ThemeProvider + CssBaseline).

## 🛠️ Stack
- React + Vite
- TypeScript
- Material UI
- CSS Modules globais (project.css, header.css, etc.)
- Deploy: [Vercel](https://amanda-trinity-portfolio.vercel.app/)

## 🚀 Como rodar
```bash
# instalar dependências
npm install

# ambiente de desenvolvimento
npm run dev

# build de produção
npm run build

# pré-visualizar build
npm run preview
```

## 📂 Estrutura (principal)
```
src/
  App.tsx
  main.tsx
  theme.ts
  componentes/
    Projetos/
      Projetos.tsx
      ProjetoCard.tsx
      projetos.ts
  styles/
    global.css
    header.css
    project.css
    sobre.css
    habilidade.css
    formacao.css
```

## ✨ Seções
- Header: apresentação e CTA.
- Sobre: resumo pessoal.
- Habilidades: lista de tecnologias.
- Formação: detalhes de cursos e conteúdos.
- Projetos: cards com imagem, descrição, tags e links.