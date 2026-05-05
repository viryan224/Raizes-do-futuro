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

  // ✅ VALIDAÇÃO
  if(!area || area <= 0){
    erro.style.display = "block";
    erro.innerText = "⚠️ Informe uma área válida maior que zero.";
    return;
  }

  if(!agua || !fert){
    erro.style.display = "block";
    erro.innerText = "⚠️ Preencha todos os campos corretamente.";
    return;
  }

  // 🔢 CÁLCULO
  let pontos = (4 - agua) * 30 + (4 - fert) * 35;
  if(pontos > 100) pontos = 100;

  // 🎨 CLASSIFICAÇÃO
  let cor, titulo;

  if(pontos >= 80){
    cor = "#2d6a4f";
    titulo = "🌱 Sustentabilidade Elevada";
  }
  else if(pontos >= 50){
    cor = "#e9c46a";
    titulo = "🌿 Sustentabilidade Moderada";
  }
  else{
    cor = "#d62828";
    titulo = "⚠️ Baixa Sustentabilidade";
  }

  // 🔎 DIAGNÓSTICO INTELIGENTE
  let problema = "";
  let motivo = "";

  if(agua == 3){
    problema = "uso excessivo de água";
    motivo = "o consumo elevado pode gerar desperdício e escassez";
  }
  else if(fert == 3){
    problema = "uso intenso de fertilizantes químicos";
    motivo = "isso pode degradar o solo e causar impactos ambientais";
  }
  else{
    problema = "equilíbrio sustentável";
    motivo = "suas práticas estão alinhadas com a preservação ambiental";
  }

  // 💡 MENSAGEM INTELIGENTE
  msgInteligente.innerHTML = `
    🔎 Seu principal ponto é <strong>${problema}</strong>, porque ${motivo}.
  `;

  // 🧱 RESULTADO BASE
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
      ">
      </div>
    </div>

  </div>
  `;

  // 🎬 ANIMAÇÃO DA BARRA
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

  // 📜 SCROLL AUTOMÁTICO
  resultado.scrollIntoView({
    behavior: "smooth"
  });

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
