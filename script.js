   (() => {
  "use strict";

  // MODO ESCURO
  const btnTema = document.getElementById("toggleTema");
  btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btnTema.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
  });

  // BOAS VINDAS
  const inputNome = document.getElementById("nomeUsuario");
  const boasVindas = document.getElementById("boasVindas");
  inputNome.addEventListener("input", (e) => {
    boasVindas.textContent = e.target.value ? `Olá, ${e.target.value}! 🌱` : "";
  });

  // CARDS
  document.querySelectorAll("[data-card]").forEach(card => {
    card.addEventListener("click", () => card.classList.toggle("is-open"));
  });

  // ANTES E DEPOIS
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  const compImg = document.getElementById("comparacaoImg");
  const compTitulo = document.getElementById("comparacaoTitulo");

  toggleBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const modo = btn.dataset.modo;
      toggleBtns.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      
      compImg.src = modo === "antes" ? "img/antes.jpg" : "img/depois.jpg";
      compTitulo.textContent = modo === "antes" ? "Agricultura Não Sustentável" : "Agricultura Sustentável";
    });
  });

  // CALCULADORA
  const form = document.getElementById("formCalc");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const area = parseFloat(document.getElementById("area").value);
    const agua = parseInt(document.getElementById("agua").value);
    const fert = parseInt(document.getElementById("fertilizantes").value);

    const impacto = (area * 0.1) + (agua * 10) + (fert * 10);
    
    resultado.className = "resultado show " + (impacto < 30 ? "baixo" : impacto < 60 ? "medio" : "alto");
    resultado.innerHTML = `<h3>Impacto: ${impacto.toFixed(0)} pontos</h3><p>Nível: ${impacto < 30 ? "Baixo" : impacto < 60 ? "Médio" : "Alto"}</p>`;
  });

  // OBSERVER PARA REVEAL
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
})();
