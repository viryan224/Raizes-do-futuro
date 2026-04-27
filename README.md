# 🌾 AgroForte — Agro Forte, Futuro Sustentável

Site educacional interativo sobre **sustentabilidade no agronegócio**, com calculadora de impacto ambiental (pegada ecológica agrícola). Projeto desenvolvido para o **Agrinho**.

## 🎯 Objetivo

Conscientizar produtores rurais e estudantes sobre a importância do equilíbrio entre **produção agrícola e preservação do meio ambiente**, ensinando boas práticas e permitindo que o usuário calcule o impacto ambiental da sua produção.

## 🌱 Tema Agrinho

**“Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente.”**

O projeto explora como a agricultura moderna pode ser produtiva sem destruir os recursos naturais, mostrando práticas que conciliam rentabilidade e responsabilidade ambiental.

## 🛠️ Tecnologias Utilizadas

- **HTML5** — estrutura semântica (`header`, `main`, `section`, `footer`)
- **CSS3** — Flexbox, Grid, variáveis CSS, animações e media queries
- **JavaScript (ES6)** — manipulação do DOM, eventos, validação de formulário, cálculos dinâmicos

> ⚠️ Nenhum framework foi utilizado (sem React, Bootstrap, jQuery, etc.).

## 📁 Estrutura do Projeto

```
/projeto
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── hero.jpg
│   ├── antes.jpg
│   └── depois.jpg
└── README.md
```

## 🚀 Instruções de Uso

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador moderno.
3. Para publicar no **GitHub Pages**:
   - Envie a pasta `projeto` para o seu repositório.
   - Vá em **Settings → Pages** e selecione a branch `main`.
   - Adicione a tag/topic **`agrinho`** ao repositório.

## 🧮 Como Funciona a Calculadora

A calculadora estima o **impacto ambiental** da produção a partir de três variáveis:

| Campo | Descrição |
|---|---|
| Área plantada (ha) | Tamanho da lavoura em hectares |
| Consumo de água | Baixo (1) / Médio (2) / Alto (3) |
| Uso de fertilizantes | Baixo (1) / Médio (2) / Alto (3) |

**Fórmula:**
```
índice = (área × 0,4) + (água × 15) + (fertilizantes × 20)
```

**Classificação do resultado:**

- 🟢 **Baixo impacto** — índice < 50
- 🟡 **Médio impacto** — índice entre 50 e 99
- 🔴 **Alto impacto** — índice ≥ 100

Cada resultado exibe **recomendações sustentáveis personalizadas** com cores e estilos visuais distintos.

## ✨ Diferenciais

- 🌙 Modo escuro (toggle persistente via `localStorage`)
- 🪄 Scroll suave entre as seções
- 🎬 Animações ao rolar a página (Intersection Observer)
- 👤 Mensagem personalizada com o nome do usuário
- 🎨 Design responsivo para mobile, tablet e desktop
- ♿ Acessibilidade: labels, `aria-live`, navegação por teclado

## 🖼️ Créditos das Imagens

Todas as imagens foram **geradas por IA** especificamente para este projeto, livres de direitos autorais.

## 📜 Licença

Projeto educacional livre para uso e modificação.

---

**Tag do repositório:** `agrinho`
