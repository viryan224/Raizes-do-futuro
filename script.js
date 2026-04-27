/* =========================================================
   AgroForte — Script principal
   HTML/CSS/JS puro — sem frameworks
   ========================================================= */

(() => {
  "use strict";

  /* ---------- 1. MODO ESCURO ---------- */
  const btnTema = document.getElementById("toggleTema");
  const temaSalvo = localStorage.getItem("agroforte-tema");
  if (temaSalvo === "dark") {
    document.body.classList.add("dark");
    btnTema.textContent = "☀️";
  }
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const escuro = document.body.classList.contains("dark");
    btnTema.textContent = escuro ? "☀️" : "🌙";
    localStorage.setItem("agroforte-tema", escuro ? "dark" : "light");
  });

  /* ---------- 2. NOME DO USUÁRIO ---------- */
  const inputNome = document.getElementById("nomeUsuario");
  const boasVindas = document.getElementById("boasVindas");
  inputNome.addEventListener("input", (e) => {
    const nome = e.target.value.trim();
    boasVindas.textContent = nome
      ? `Bem-vindo(a), ${nome}! Vamos cultivar um futuro melhor 🌱`
      : "";
  });

  /* ---------- 3. CARDS EDUCATIVOS EXPANSÍVEIS ---------- */
  const cards = document.querySelectorAll("[data-card]");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-open");
    });
  });

  /* ---------- 4. ANTES vs DEPOIS ---------- */
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const comparacao = document.getElementById("comparacao");
  const compImg = document.getElementById("comparacaoImg");
  const compTitulo = document.getElementById("comparacaoTitulo");
  const compDesc = document.getElementById("comparacaoDesc");

  const conteudos = {
    antes: {
      img: "img/antes.jpg",
      alt: "Solo degradado",
      titulo: "Agricultura Não Sustentável",
      desc:
        "Uso excessivo de agrotóxicos, desmatamento, erosão do solo e desperdício de água levam à degradação ambiental e à perda de produtividade ao longo do tempo.",
    },
    depois: {
      img: "img/depois.jpg",
      alt: "Plantação sustentável",
      titulo: "Agricultura Sustentável",
      desc:
        "Rotação de culturas, irrigação eficiente, controle biológico de pragas e preservação ambiental garantem produção saudável e duradoura, em harmonia com a natureza.",
    },
  };

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const modo = btn.dataset.modo;
      toggleBtns.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const dados = conteudos[modo];
      compImg.style.opacity = "0";
      setTimeout(() => {
        compImg.src = dados.img;
        compImg.alt = dados.alt;
        compImg.style.opacity = "1";
      }, 200);
      compTitulo.textContent = dados.titulo;
      compDesc.textContent = dados.desc;
      comparacao.classList.remove("comparacao--antes", "comparacao--depois");
      comparacao.classList.add(`comparacao--${modo}`);
    });
  });

  /* ---------- 5. CALCULADORA DE IMPACTO ---------- */
  const form = document.getElementById("formCalc");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const areaInput = document.getElementById("area");
    const aguaInput = document.getElementById("agua");
    const fertInput = document.getElementById("fertilizantes");

    // Validação manual
    let valido = true;
    [areaInput, aguaInput, fertInput].forEach((campo) => {
      const grupo = campo.parentElement;
      if (!campo.value || (campo.type === "number" && Number(campo.value) <= 0)) {
        grupo.classList.add("erro");
        valido = false;
      } else {
        grupo.classList.remove("erro");
      }
    });

    if (!valido) {
      mostrarResultado(
        "alto",
        "⚠️ Preencha todos os campos corretamente",
        "Verifique os valores informados e tente novamente.",
        []
      );
      return;
    }

    const area = parseFloat(areaInput.value);
    const agua = parseInt(aguaInput.value, 10);
    const fert = parseInt(fertInput.value, 10);

    // Fórmula do índice de impacto
    // base por hectare (0.4) + fatores de água e fertilizante
    const indice = (area * 0.4) + (agua * 15) + (fert * 20);

    const nome = inputNome.value.trim();
    const saudacao = nome ? `${nome}, ` : "";

    if (indice < 50) {
      mostrarResultado(
        "baixo",
        "🟢 Baixo Impacto Ambiental",
        `${saudacao}sua produção tem uma pegada ecológica reduzida. Continue investindo em práticas sustentáveis!`,
        [
          "Mantenha a rotação de culturas",
          "Continue monitorando o consumo de água",
          "Considere certificações orgânicas",
        ]
      );
    } else if (indice < 100) {
      mostrarResultado(
        "medio",
        "🟡 Médio Impacto Ambiental",
        `${saudacao}sua produção tem impacto moderado. Há espaço para melhorias significativas.`,
        [
          "Implante irrigação por gotejamento",
          "Reduza gradualmente o uso de fertilizantes químicos",
          "Adote o controle biológico de pragas",
          "Avalie o uso de adubação orgânica",
        ]
      );
    } else {
      mostrarResultado(
        "alto",
        "🔴 Alto Impacto Ambiental",
        `${saudacao}sua produção apresenta alta pegada ecológica. É urgente revisar as práticas adotadas.`,
        [
          "Reduza imediatamente o consumo de água",
          "Substitua fertilizantes químicos por orgânicos",
          "Realize análise de solo profissional",
          "Implemente sistemas de captação de água da chuva",
          "Busque consultoria em agricultura regenerativa",
        ]
      );
    }
  });

  function mostrarResultado(nivel, titulo, texto, recomendacoes) {
    resultado.className = "resultado";
    resultado.classList.add(nivel, "show");

    let html = `<h3>${titulo}</h3><p>${texto}</p>`;
    if (recomendacoes.length) {
      html += "<h4 style='margin-top:1rem;'>Recomendações sustentáveis:</h4><ul>";
      recomendacoes.forEach((r) => (html += `<li>${r}</li>`));
      html += "</ul>";
    }
    resultado.innerHTML = html;
    resultado.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* ---------- 6. ANIMAÇÕES AO ROLAR (Intersection Observer) ---------- */
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  reveals.forEach((el) => observer.observe(el));

  /* ---------- 7. REINICIAR EXPERIÊNCIA ---------- */
  document.getElementById("btnReiniciar").addEventListener("click", () => {
    form.reset();
    resultado.className = "resultado";
    resultado.innerHTML = "";
    inputNome.value = "";
    boasVindas.textContent = "";
    cards.forEach((c) => c.classList.remove("is-open"));
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- 8. SCROLL SUAVE NOS LINKS DO MENU ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const alvo = document.querySelector(link.getAttribute("href"));
      if (alvo) {
        e.preventDefault();
        alvo.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();
