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
  document.getElementById("tituloSolo").innerText = "Solo Degradado";
  document.getElementById("descSolo").innerText =
  "Uso excessivo de químicos, erosão e monocultura reduzem a fertilidade da terra.";
}

/* DEPOIS */
function mostrarDepois(){
  document.getElementById("imgSolo").src = "depois.jpg";
  document.getElementById("tituloSolo").innerText = "Solo Fértil e Sustentável";
  document.getElementById("descSolo").innerText =
  "Rotação de culturas, irrigação correta e proteção vegetal aumentam a produtividade.";
}

/* CALCULADORA PREMIUM */
document.getElementById("formCalc").addEventListener("submit", function(e){
  e.preventDefault();

  const area = document.getElementById("area").value;
  const agua = document.getElementById("agua").value;
  const fert = document.getElementById("fertilizante").value;
  const resultado = document.getElementById("resultado");

  let pontos = 0;

  if(agua == "1") pontos += 50;
  if(fert == "1") pontos += 50;

  let titulo = "";
  let texto = "";
  let nivel = "";
  let ranking = "";
  let dicas = "";

  if(pontos == 100){
    titulo = "Excelente 🌱";
    nivel = "ALTO";
    ranking = "🌳 Guardião da Terra";
    texto = "Sua propriedade demonstra alto equilíbrio ambiental.";

    dicas = `
      • Continue inovando.<br>
      • Invista em energia limpa.<br>
      • Amplie tecnologias rurais.
    `;
  }

  else if(pontos >= 50){
    titulo = "Bom Caminho 👍";
    nivel = "MÉDIO";
    ranking = "🌿 Produtor Consciente";
    texto = "Você já aplica boas práticas, mas ainda pode evoluir.";

    dicas = `
      • Adote gotejamento.<br>
      • Faça rotação de culturas.<br>
      • Reduza desperdícios.
    `;
  }

  else{
    titulo = "Atenção ⚠️";
    nivel = "BAIXO";
    ranking = "🌱 Produtor Iniciante";
    texto = "Seu sistema atual precisa modernização sustentável.";

    dicas = `
      • Economize água.<br>
      • Proteja o solo.<br>
      • Use adubação orgânica.
    `;
  }

  resultado.innerHTML = `
<div class="resultado-box">

<h3>${titulo}</h3>

<p><strong>Área analisada:</strong> ${area} hectares</p>

<p><strong>Índice Sustentável:</strong> ${pontos}%</p>

<div style="background:#ddd;border-radius:20px;overflow:hidden;margin:15px 0;">
  <div style="
    width:${pontos}%;
    background:#2d6a4f;
    color:white;
    padding:8px;
    font-weight:bold;
  ">
    ${pontos}%
  </div>
</div>

<p><strong>Classificação:</strong> ${ranking}</p>

<br>

<h4>📌 Motivo da Nota</h4>

<p>
Uso de água selecionado: <strong>${agua}</strong><br>
Fertilizante selecionado: <strong>${fert}</strong>
</p>

<br>

<h4>🌱 Recomendação</h4>

<p>${texto}</p>

<br>

<h4>📈 Benefícios ao melhorar</h4>

<p>
💧 Menor desperdício de água<br>
🌱 Solo mais fértil<br>
💰 Redução de custos futuros
</p>

<br>

<button class="btn" onclick="abrirDicas()">Saber Mais</button>

<div id="maisInfo" class="extra">
  <h4>Plano Recomendado 🌱</h4>
  <p>${dicas}</p>
</div>

</div>
`;

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
