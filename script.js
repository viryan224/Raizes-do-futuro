/**
 * PROJETO AGROFORTE - AGRINHO 2026
 * Objetivo: Calcular impacto ambiental e educar sobre práticas sustentáveis.
 */

// 1. Seleção de Elementos (Nomenclatura clara conforme Nível 4)
const formCalculadora = document.getElementById('formCalc');
const campoNomeUsuario = document.getElementById('nomeUsuario');
const areaResultado = document.getElementById('resultado');
const btnTema = document.getElementById('toggleTema');

// 2. Personalização de Boas-Vindas
campoNomeUsuario.addEventListener('input', () => {
    const boasVindas = document.getElementById('boasVindas');
    const nome = campoNomeUsuario.value;
    boasVindas.textContent = nome ? `Olá, ${nome}! Vamos aprender sobre sua terra?` : '';
});

// 3. Lógica da Calculadora de Impacto (Interatividade Pedagógica)
formCalculadora.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita recarregar a página

    const hectares = parseFloat(document.getElementById('area').value);
    const sistemaAgua = document.getElementById('agua').value;
    const tipoFertilizante = document.getElementById('fertilizantes').value;

    let scoreSustentavel = 0;
    let mensagemDica = "";

    // Lógica de avaliação (Algoritmo e Estrutura)
    if (sistemaAgua === "1") scoreSustentavel += 50; // Gotejamento
    if (tipoFertilizante === "1") scoreSustentavel += 50; // Orgânico

    // Construção do feedback educativo (Requisito de Usabilidade Nível 4)
    if (scoreSustentavel === 100) {
        mensagemDica = "Excelente! Sua propriedade segue os mais altos padrões de equilíbrio ambiental.";
    } else if (scoreSustentavel >= 50) {
        mensagemDica = "Bom caminho! Tente adotar sistemas de irrigação por gotejamento para economizar até 60% de água.";
    } else {
        mensagemDica = "Alerta: O uso de técnicas convencionais pode degradar o solo a longo prazo. Considere o Manejo Integrado!";
    }

    exibirResultado(hectares, scoreSustentavel, mensagemDica);
});

// 4. Função de Exibição (Organização e Sequência Lógica)
function exibirResultado(area, score, dica) {
    areaResultado.innerHTML = `
        <div class="resultado-card">
            <h3>Análise da Área de ${area} Hectares</h3>
            <p>Índice de Sustentabilidade: <strong>${score}%</strong></p>
            <p class="feedback-texto">${dica}</p>
            <button onclick="reiniciarSimulador()" class="btn btn--secondary">Novo Cálculo</button>
        </div>
    `;
    areaResultado.scrollIntoView({ behavior: 'smooth' });
}

// 5. Funcionalidade Extra: Botão de Reiniciar (Requisito Nível 4)
function reiniciarSimulador() {
    formCalculadora.reset();
    areaResultado.innerHTML = "";
    window.location.hash = "calculadora";
}

// 6. Controle de Acessibilidade: Alternar Tema
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    btnTema.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});
