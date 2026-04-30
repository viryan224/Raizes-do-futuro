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

/* CALCULADORA */
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
  let dicas = "";

  if(pontos == 100){
    titulo = "Excelente 🌱";
    texto = "Sua propriedade demonstra ótimo equilíbrio ambiental.";
    dicas = `
      • Continue investindo em irrigação inteligente.<br>
      • Faça análise periódica do solo.<br>
      • Amplie uso de energia renovável.
    `;
  }

  else if(pontos >= 50){
    titulo = "Bom Caminho 👍";
    texto = "Você já aplica práticas positivas, mas ainda pode evoluir.";
    dicas = `
      • Reduza químicos agressivos.<br>
      • Teste compostagem orgânica.<br>
      • Implante rotação de culturas.
    `;
  }

  else{
    titulo = "Atenção ⚠️";
    texto = "Seu modelo atual pode causar impacto ambiental futuro.";
    dicas = `
      • Economize água.<br>
      • Use fertilizantes orgânicos.<br>
      • Proteja o solo contra erosão.
    `;
  }

  resultado.innerHTML = `
    <div class="resultado-box">
      <h3>${titulo}</h3>
      <p><strong>Área:</strong> ${area} hectares</p>
      <p><strong>Índice Sustentável:</strong> ${pontos}%</p>
      <p>${texto}</p>

      <br>

      <button class="btn" onclick="abrirDicas()">Saber Mais</button>

      <div id="maisInfo" class="extra">
        <h4>Como melhorar:</h4>
        <p>${dicas}</p>
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
