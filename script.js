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
  const erro = document.getElementById("mensagem-erro");
  const msgInteligente = document.getElementById("mensagem-inteligente");

  erro.style.display = "none";
  msgInteligente.innerHTML = "";

  // VALIDAÇÃO
  if(!area || area <= 0){
    erro.style.display = "block";
    erro.innerText = "⚠️ Informe uma área válida.";
    return;
  }

  // CÁLCULO
  let pontos = (4 - agua) * 30 + (4 - fert) * 35;
  if(pontos > 100) pontos = 100;

  let titulo, ranking, cor, texto, dicas;

  if(pontos >= 80){
    titulo = "Excelente 🌱";
    ranking = "🌳 Guardião da Terra";
    cor = "#2d6a4f";
    texto = "Sua produção demonstra alto equilíbrio ambiental.";
    dicas = `
      • Continue inovando<br>
      • Invista em energia limpa<br>
      • Amplie tecnologias rurais
    `;
  }
  else if(pontos >= 50){
    titulo = "Bom Caminho 👍";
    ranking = "🌿 Produtor Consciente";
    cor = "#e9c46a";
    texto = "Você já aplica boas práticas, mas pode melhorar.";
    dicas = `
      • Adote irrigação eficiente<br>
      • Faça rotação de culturas<br>
      • Reduza desperdícios
    `;
  }
  else{
    titulo = "Atenção ⚠️";
    ranking = "🌱 Produtor Iniciante";
    cor = "#d62828";
    texto = "Seu sistema precisa de melhorias sustentáveis.";
    dicas = `
      • Economize água<br>
      • Proteja o solo<br>
      • Use adubação orgânica
    `;
  }

  // DIAGNÓSTICO INTELIGENTE
  let problema = "";
  let motivo = "";

  if(agua == 3){
    problema = "uso excessivo de água";
    motivo = "isso pode causar desperdício e reduzir a disponibilidade futura";
  }
  else if(fert == 3){
    problema = "uso intensivo de fertilizantes químicos";
    motivo = "isso pode degradar o solo e afetar o meio ambiente";
  }
  else{
    problema = "equilíbrio sustentável";
    motivo = "suas práticas estão alinhadas com a preservação";
  }

  msgInteligente.innerHTML =
    `🔎 Seu principal ponto é <strong>${problema}</strong>, porque ${motivo}.`;

  // RESULTADO COMPLETO
  resultado.innerHTML = `
  <div class="resultado-box">

    <h2 style="color:${cor};">${titulo}</h2>

    <p><strong>Área:</strong> ${area} hectares</p>

    <p><strong>Índice Sustentável:</strong> <span id="porcentagem">0</span>%</p>

    <div style="background:#ddd;border-radius:20px;overflow:hidden;margin:15px 0;">
      <div id="barra" style="
        width:0%;
        background:${cor};
        color:white;
        padding:10px;
        text-align:center;
        font-weight:bold;
      "></div>
    </div>

    <p><strong>Classificação:</strong> ${ranking}</p>

    <br>

    <h4>📌 Análise</h4>
    <p>${texto}</p>

    <br>

    <button class="btn" onclick="abrirDicas()">Ver Plano Completo</button>

    <div id="maisInfo" style="display:none; margin-top:15px;">
      <h4>🌱 Plano Recomendado</h4>
      <p>${dicas}</p>
    </div>

  </div>
  `;

  // ANIMAÇÃO
  let progresso = 0;
  const barra = document.getElementById("barra");
  const porcentagem = document.getElementById("porcentagem");

  const animar = setInterval(() => {
    if(progresso >= pontos){
      clearInterval(animar);
    } else{
      progresso++;
      barra.style.width = progresso + "%";
      barra.innerText = progresso + "%";
      porcentagem.innerText = progresso;
    }
  }, 15);

  // SCROLL
  resultado.scrollIntoView({ behavior: "smooth" });
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
