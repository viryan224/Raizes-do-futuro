const nomeUsuario = document.getElementById("nomeUsuario");
const boasVindas = document.getElementById("boasVindas");
const tema = document.getElementById("toggleTema");
const body = document.body;

// Adiciona o evento de input
nomeUsuario.addEventListener("input", () => {
  const nome = nomeUsuario.value.trim();

  if (nome !== "") {
    boasVindas.innerText = `Olá, ${nome}! Vamos construir um futuro sustentável 🌱`;
  } else {
    boasVindas.innerText = "";
  }
});

function irEducacao(){
  document.getElementById("importancia-agro").scrollIntoView({
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

  document.getElementById("imgSolo").src = "Imagens/antes.jpg";

  document.getElementById("tituloSolo").innerText =
  "Modelo Convencional";

  document.getElementById("descSolo").innerText =
  "Práticas sem planejamento sustentável podem degradar o solo, aumentar desperdícios e reduzir a produtividade ao longo do tempo.";

  document.getElementById("listaSolo").innerHTML =

  "❌ Desgaste do solo<br>" +
  "❌ Alto consumo de água<br>" +
  "❌ Dependência química<br>" +
  "❌ Maior impacto ambiental";

  /* LINKS */
  document.getElementById("linkArtigo").href =
  "https://www.idam.am.gov.br/wp-content/uploads/2024/06/Cartilha-gecam.indd_compressed.pdf";

  document.getElementById("linkVideo").href =
  "https://www.tce.sp.gov.br/sala-imprensa/videos/ods-2-fome-zero-e-agricultura-sustentavel-observatorio-futuro-tcesp";
}


/* DEPOIS */
function mostrarDepois(){

  document.getElementById("imgSolo").src = "Imagens/depois.jpg";

  document.getElementById("tituloSolo").innerText =
  "Modelo Sustentável";

  document.getElementById("descSolo").innerText =
  "Técnicas sustentáveis aumentam a produtividade, preservam recursos naturais e fortalecem a agricultura no longo prazo.";

  document.getElementById("listaSolo").innerHTML =

  "✅ Solo mais fértil<br>" +
  "✅ Uso eficiente da água<br>" +
  "✅ Redução de impactos<br>" +
  "✅ Produção sustentável";

  /* LINKS */
  document.getElementById("linkArtigo").href =
  "https://www.bosch.com.br/noticias-e-historias/agronegocio/agricultura-sustentavel/";

  document.getElementById("linkVideo").href =
  "https://www.youtube.com/watch?v=i7_tbsV6N84";
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
  const aguaNum = Number(agua);
const fertNum = Number(fert);

let pontos = 0;

// Água tem mais impacto ambiental
if(aguaNum == 1) pontos += 60;
else if(aguaNum == 2) pontos += 30;
else pontos += 10;

// Fertilizante
if(fertNum == 1) pontos += 40;
else if(fertNum == 2) pontos += 20;
else pontos += 5;

// Garantir limite
if(pontos > 100) pontos = 100;

let titulo, ranking, cor, texto, dicas, linkExtra;

// Classificação
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

  linkExtra = `
    <a href="https://www.idam.am.gov.br/wp-content/uploads/2024/06/Cartilha-gecam.indd_compressed.pdf" target="_blank" class="btn pequeno">
      🌱 Conheça tecnologias sustentáveis
    </a>
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

  linkExtra = `
    <a href="https://youtu.be/uhKm3vcQcik?si=v3auQ9cBQJienrdt" target="_blank" class="btn pequeno">
      💧 Ver técnicas sustentáveis
    </a>
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

  linkExtra = `
    <a href="https://agrosmart.com.br/blog/agricultura-sustentavel/" target="_blank" class="btn pequeno">
      📘 Aprender como melhorar
    </a>
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

  <br>

  ${linkExtra}
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
/* */
/* ACESSIBILIDADE */
/* */

let tamanhoFonte = 100;

/* BOTÃO A+ */

const aumentar =
document.getElementById("aumentarFonte");

if(aumentar){

  aumentar.addEventListener("click", () => {

    tamanhoFonte += 10;

    document.documentElement.style.fontSize =
    tamanhoFonte + "%";

  });

}

/* BOTÃO A- */

const diminuir =
document.getElementById("diminuirFonte");

if(diminuir){

  diminuir.addEventListener("click", () => {

    tamanhoFonte -= 10;

    document.documentElement.style.fontSize =
    tamanhoFonte + "%";

  });

}

/* LEITURA */

document.addEventListener("DOMContentLoaded", () => {

  const ler = document.getElementById("lerPagina");
  const parar = document.getElementById("pararLeitura");
  const synth = window.speechSynthesis;

  let falando = false;
  let indexParagrafo = 0;

let parrafos = Array.from(document.querySelectorAll("p"))
.filter(p => p.innerText.trim() !== "");

  let falaAtual = null;

  // Remove destaque
  function resetarDestaque() {
    parrafos.forEach(p => p.classList.remove("destaque"));
  }

  // Lê parágrafos um por um
  function lerParagrafo() {
    if (indexParagrafo >= parrafos.length) {
      falando = false;
      indexParagrafo = 0;
      resetarDestaque();
      return;
    }

    const p = parrafos[indexParagrafo];

    resetarDestaque();
    p.classList.add("destaque");

    falaAtual = new SpeechSynthesisUtterance(p.innerText);
    falaAtual.lang = "pt-BR";
    falaAtual.rate = 0.9;
    falaAtual.pitch = 1;
    falaAtual.volume = 1;

    falaAtual.onend = () => {
      indexParagrafo++;
      lerParagrafo();
    };

    synth.speak(falaAtual);
  }

  // Botão LER
  if (ler) {
    ler.addEventListener("click", () => {
      synth.cancel();

      indexParagrafo = 0;
      falando = true;

      lerParagrafo();
    });
  }

  // Botão PARAR
  if (parar) {
    parar.addEventListener("click", () => {
      synth.cancel();
      falando = false;
      indexParagrafo = 0;
      resetarDestaque();
    });
  }

});
const btnAcessibilidade =
document.getElementById("btnAcessibilidade");

const menuAcessibilidade =
document.getElementById("menuAcessibilidade");

btnAcessibilidade.addEventListener("click", () => {

  menuAcessibilidade.classList.toggle("ativo");

});

/* FECHAR MENU AO CLICAR FORA */

document.addEventListener("click", (e) => {

  if (
    !menuAcessibilidade.contains(e.target) &&
    !btnAcessibilidade.contains(e.target)
  ) {
    menuAcessibilidade.classList.remove("ativo");
  }

});
