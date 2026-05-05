const nomeUsuario = document.getElementById("nomeUsuario");
const boasVindas = document.getElementById("boasVindas");
const tema = document.getElementById("toggleTema");
const body = document.body;

/* BOAS VINDAS */
nomeUsuario.addEventListener("input", () => {
  const nome = nomeUsuario.value.trim();

  if(nome !== ""){
    boasVindas.innerText = `Olá, ${nome}! Vamos construir um futuro sustentável 🌱`;
  }else{
    boasVindas.innerText = "";
  }
});

/* IR PARA EDUCAÇÃO */
function irEducacao(){
  document.getElementById("educacao").scrollIntoView({
    behavior:"smooth"
  });
}

/* TEMA */
tema.addEventListener("click", () => {
  body.classList.toggle("dark");

  if(body.classList.contains("dark")){
    tema.innerText = "☀️";
  }else{
    tema.innerText = "🌙";
  }
});

/* ANTES */
function mostrarAntes(){
  document.getElementById("imgSolo").src = "antes.jpg";

  document.getElementById("tituloSolo").innerText = "Modelo Convencional";

  document.getElementById("descSolo").innerText =
    "O modelo tradicional prioriza a produção imediata, muitas vezes sem planejamento sustentável, causando impactos negativos ao longo do tempo.";

  document.getElementById("listaSolo").innerHTML =
    "❌ Solo perde nutrientes com o tempo<br>" +
    "❌ Uso excessivo de água<br>" +
    "❌ Dependência de fertilizantes químicos<br>" +
    "❌ Maior impacto ambiental<br>" +
    "❌ Produção menos sustentável";
}

/* DEPOIS */
function mostrarDepois(){
  document.getElementById("imgSolo").src = "depois.jpg";

  document.getElementById("tituloSolo").innerText = "Modelo Sustentável";

  document.getElementById("descSolo").innerText =
  "A agricultura sustentável busca equilibrar produção e preservação ambiental. " +
  "Com técnicas adequadas, é possível aumentar a produtividade e conservar os recursos naturais.";

  document.getElementById("listaSolo").innerHTML =
    "✅ Solo mais fértil e produtivo<br>" +
    "✅ Uso eficiente da água<br>" +
    "✅ Redução de impactos ambientais<br>" +
    "✅ Menor custo a longo prazo<br>" +
    "✅ Produção sustentável e equilibrada";
}

/* CALCULADORA PREMIUM */

document.getElementById("formCalc").addEventListener("submit", function(e){
  e.preventDefault();

  const area = Number(document.getElementById("area").value);
  const agua = Number(document.getElementById("agua").value);
  const fert = Number(document.getElementById("fertilizante").value);
  const resultado = document.getElementById("resultado");

  let pontos = 0;

  // CÁLCULO MAIS INTELIGENTE
  pontos += (4 - agua) * 30; // menos água = melhor
  pontos += (4 - fert) * 35; // mais orgânico = melhor

  // LIMITAR
  if(pontos > 100) pontos = 100;

  // CLASSIFICAÇÃO
  let titulo, nivel, ranking, cor, impacto, recomendacao;

  if(pontos >= 80){
    titulo = "🌱 Sustentabilidade Elevada";
    nivel = "ALTO";
    ranking = "🌳 Guardião do Agro Sustentável";
    cor = "#2d6a4f";

    impacto = `
    Sua propriedade apresenta excelente equilíbrio ambiental.
    Isso significa maior produtividade com menor impacto na natureza.
    `;

    recomendacao = `
    • Invista em tecnologias de precisão<br>
    • Amplie o uso de energia renovável<br>
    • Continue com práticas sustentáveis
    `;
  }

  else if(pontos >= 50){
    titulo = "🌿 Sustentabilidade Moderada";
    nivel = "MÉDIO";
    ranking = "🌾 Produtor Consciente";
    cor = "#95d5b2";

    impacto = `
    Você já aplica boas práticas, mas ainda há espaço para evolução.
    Pequenas mudanças podem gerar grandes resultados.
    `;

    recomendacao = `
    • Reduza o uso de água<br>
    • Utilize mais fertilizantes orgânicos<br>
    • Faça rotação de culturas
    `;
  }

  else{
    titulo = "⚠️ Baixa Sustentabilidade";
    nivel = "BAIXO";
    ranking = "🌱 Produtor em Transição";
    cor = "#d00000";

    impacto = `
    O sistema atual pode causar impactos negativos ao solo e ao meio ambiente.
    Melhorias são necessárias para garantir produtividade futura.
    `;

    recomendacao = `
    • Diminua o uso de químicos<br>
    • Proteja o solo com cobertura vegetal<br>
    • Adote irrigação eficiente
    `;
  }

  // IMPACTO REAL (diferencial)
  let economiaAgua = (3 - agua) * 20;
  let economiaCusto = (3 - fert) * 15;

  // RESULTADO FINAL (MAIS BONITO E FORTE)
  resultado.innerHTML = `
  <div class="resultado-box">

    <h2 style="color:${cor}; margin-bottom:10px;">${titulo}</h2>

    <p><strong>Área analisada:</strong> ${area} hectares</p>

    <p><strong>Índice de Sustentabilidade:</strong> ${pontos}%</p>

    <div style="background:#ddd;border-radius:20px;overflow:hidden;margin:15px 0;">
      <div style="
        width:${pontos}%;
        background:${cor};
        color:white;
        padding:10px;
        font-weight:bold;
        text-align:center;
      ">
        ${pontos}%
      </div>
    </div>

    <p><strong>Classificação:</strong> ${ranking}</p>

    <br>

    <h4>🌎 Impacto na Propriedade</h4>
    <p>${impacto}</p>

    <br>

    <h4>📊 Estimativa de Ganhos</h4>
    <p>
      💧 Economia de água: até ${economiaAgua > 0 ? economiaAgua : 0}%<br>
      💰 Redução de custos: até ${economiaCusto > 0 ? economiaCusto : 0}%
    </p>

    <br>

    <h4>🚀 Recomendações Inteligentes</h4>
    <p>${recomendacao}</p>

    <br>

    <button class="btn" onclick="abrirDicas()">Ver Plano Completo</button>

    <div id="maisInfo" class="extra">
      <h4>🌱 Plano de Evolução Sustentável</h4>
      <p>
        A adoção gradual de práticas sustentáveis melhora a produtividade,
        reduz custos e preserva o meio ambiente a longo prazo.
      </p>
    </div>

  </div>
  `;
});
/* ABRIR DICAS */
function abrirDicas(){
  const box = document.getElementById("maisInfo");

  if(box.style.display === "block"){
    box.style.display = "none";
  }else{
    box.style.display = "block";
  }
}

/* BOTÃO VOLTAR TOPO */
window.addEventListener("scroll", function(){

  const botao = document.getElementById("btnTopo");

  if(window.scrollY > 400){
    botao.style.display = "block";
  }else{
    botao.style.display = "none";
  }

});

function topoSite(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
}

document.getElementById("formContato").addEventListener("submit", function(e){
  e.preventDefault();

  document.getElementById("msgContato").innerHTML =
    "✅ Obrigado pelo seu feedback! Sua mensagem foi recebida.";

  this.reset();
});
