document.addEventListener("DOMContentLoaded", () => {
    // 1. Modo Escuro
    const btnTema = document.getElementById("toggleTema");
    btnTema.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        btnTema.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
    });

    // 2. Boas-vindas
    const inputNome = document.getElementById("nomeUsuario");
    const boasVindas = document.getElementById("boasVindas");
    inputNome.addEventListener("input", (e) => {
        boasVindas.textContent = e.target.value ? `Bem-vindo, ${e.target.value}! 🌱` : "";
    });

    // 3. Cards Expansíveis
    document.querySelectorAll("[data-card]").forEach(card => {
        card.addEventListener("click", () => card.classList.toggle("is-open"));
    });

    // 4. Antes vs Depois
    const toggleBtns = document.querySelectorAll(".toggle-btn");
    const compImg = document.getElementById("comparacaoImg");
    const compTitulo = document.getElementById("comparacaoTitulo");
    const compDesc = document.getElementById("comparacaoDesc");

    toggleBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            toggleBtns.forEach(b => b.classList.remove("is-active"));
            btn.classList.add("is-active");

            if (btn.dataset.modo === "depois") {
                compImg.src = "img/depois.jpg";
                compTitulo.textContent = "Agricultura Sustentável";
                compDesc.textContent = "Uso de tecnologias verdes, rotação de culturas e preservação de nascentes.";
            } else {
                compImg.src = "img/antes.jpg";
                compTitulo.textContent = "Agricultura Convencional";
                compDesc.textContent = "Uso intensivo de defensivos agrícolas e monocultura degradam o ecossistema.";
            }
        });
    });

    // 5. Calculadora
    const form = document.getElementById("formCalc");
    const res = document.getElementById("resultado");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const area = document.getElementById("area").value;
        const agua = document.getElementById("agua").value;
        const fert = document.getElementById("fertilizantes").value;

        const pontos = (area * 0.5) + (agua * 10) + (fert * 10);
        let status = pontos > 50 ? "🔴 Alto Impacto Ambiental" : "🟢 Baixo Impacto Ambiental";
        
        res.innerHTML = `${status} <br> <small>Pontuação estimada: ${pontos.toFixed(1)}</small>`;
    });

    // 6. Animação Scroll (Reveal)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".reveal").forEach(section => observer.observe(section));
});
