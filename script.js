/**
 * PROJETO AGROFORTE - AGRINHO 2026
 * Script corrigido + melhorias
 */

/* =========================
   ELEMENTOS
========================= */
const formCalculadora = document.getElementById("formCalc");
const campoNomeUsuario = document.getElementById("nomeUsuario");
const areaResultado = document.getElementById("resultado");
const btnTema = document.getElementById("toggleTema");

const imagemComparacao = document.getElementById("comparacaoImg");
const tituloComparacao = document.getElementById("comparacaoTitulo");
const descComparacao = document.getElementById("comparacaoDesc");
const botoesModo = document.querySelectorAll(".toggle-btn");

/* =========================
   BOAS-VINDAS
========================= */
campoNomeUsuario.addEventListener("input", () => {
    const boasVindas = document.getElementById("boasVindas");
    const nome = campoNomeUsuario.value.trim();

    boasVindas.textContent = nome
        ? `Olá, ${nome}! Vamos aprender sobre sua terra?`
        : "";
});

/* =========================
   TROCA ANTES / DEPOIS
========================= */
botoesModo.forEach((botao) => {
    botao.addEventListener("click", () => {

        botoesModo.forEach(btn => btn.classList.remove("is-active"));
        botao.classList.add("is-active");

        const modo = botao.dataset.modo;

        if (modo === "antes") {
            imagemComparacao.src = "antes.jpg";
            tituloComparacao.textContent = "Agricultura Convencional";
            descComparacao.textContent =
                "Uso intensivo de defensivos agrícolas e monocultura degradam o ecossistema.";
        } else {
            imagemComparacao.src = "depois.jpg";
            tituloComparacao.textContent = "Agricultura Sustentável";
            descComparacao.textContent =
                "Rotação de culturas, irrigação eficiente e solo protegido aumentam a produtividade.";
        }
    });
});

/* =========================
   CALCULADORA
========================= */
formCalculadora.addEventListener("submit", (event) => {
    event.preventDefault();

    const hectares = parseFloat(document.getElementById("area").value);
    const sistemaAgua = document.getElementById("agua").value;
    const tipoFertilizante = document.getElementById("fertilizantes").value;

    let score = 0;
    let titulo = "";
    let dica = "";
    let recomendacoes = "";

    if (sistemaAgua === "1") score += 50;
    if (tipoFertilizante === "1") score += 50;

    if (score === 100) {
        titulo = "Excelente Resultado 🌱";
        dica =
            "Sua propriedade segue práticas modernas e sustentáveis.";
        recomendacoes =
            "• Continue usando irrigação inteligente.<br>• Invista em cobertura vegetal.<br>• Faça análise periódica do solo.";
    }

    else if (score >= 50) {
        titulo = "Bom Caminho 👍";
        dica =
            "Você já possui boas práticas, mas ainda pode melhorar.";
        recomendacoes =
            "• Adote gotejamento.<br>• Reduza fertilizantes químicos.<br>• Faça rotação de culturas.";
    }

    else {
        titulo = "Atenção ⚠️";
        dica =
            "Seu sistema pode causar desgaste ambiental ao longo do tempo.";
        recomendacoes =
            "• Economize água.<br>• Utilize compostagem.<br>• Proteja o solo contra erosão.";
    }

    exibirResultado(hectares, score, titulo, dica, recomendacoes);
});

/* =========================
   EXIBIR RESULTADO
========================= */
function exibirResultado(area, score, titulo, dica, recomendacoes) {

    areaResultado.innerHTML = `
        <div class="resultado-card">
            <h3>${titulo}</h3>

            <p><strong>Área analisada:</strong> ${area} hectares</p>

            <p><strong>Índice de Sustentabilidade:</strong> ${score}%</p>

            <p class="feedback-texto">${dica}</p>

            <div class="dicas-box">
                <h4>Como melhorar sua agricultura:</h4>
                <button class="btn btn--primary" onclick="toggleDicas()">
                    Saber Mais
                </button>

                <div id="maisDicas" style="display:none; margin-top:15px;">
                    ${recomendacoes}
                </div>
            </div>

            <br>

            <button onclick="reiniciarSimulador()" class="btn">
                Novo Cálculo
            </button>
        </div>
    `;

    areaResultado.scrollIntoView({ behavior: "smooth" });
}

/* =========================
   ABRIR DICAS
========================= */
function toggleDicas() {
    const box = document.getElementById("maisDicas");

    if (box.style.display === "none") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}

/* =========================
   REINICIAR
========================= */
function reiniciarSimulador() {
    formCalculadora.reset();
    areaResultado.innerHTML = "";
    window.location.hash = "calculadora";
}

/* =========================
   TEMA
========================= */
btnTema.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    btnTema.textContent =
        document.body.classList.contains("dark") ? "☀️" : "🌙";
});
