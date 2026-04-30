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

/* CALCULADORA MELHORADA */
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
  let solo = "";
  let economia = "";
  let principal = "";
  let dicas = "";

  if(pontos == 100){
    titulo = "Excelente 🌱";
    nivel = "ALTO";
    solo = "Saudável";
    economia = "Muito Alta";
    principal = "Manter e expandir tecnologia sustentável";
    texto = "Sua propriedade demonstra ótimo equilíbrio entre produção e preservação.";

    dicas = `
    • Continue usando irrigação inteligente.<br>
    • Invista em energia solar.<br>
    • Faça análise periódica do solo.<br>
    • Busque certificações ambientais.
    `;
  }

  else if(pontos >= 50){
    titulo = "Bom Caminho 👍";
    nivel = "MÉDIO";
    solo = "Estável";
    economia = "Alta";
    principal = "Reduzir químicos e melhorar irrigação";
    texto = "Você já possui boas práticas, mas ainda pode evoluir bastante.";

    dicas = `
    • Adote gotejamento.<br>
    • Use compostagem orgânica.<br>
    • Faça rotação de culturas.<br>
    • Monitore desperdícios.
    `;
  }

  else{
    titulo = "Atenção ⚠️";
    nivel = "BAIXO";
    solo = "Em risco";
    economia = "Grande oportunidade";
    principal = "Modernizar sistema produtivo";
    texto = "Seu modelo atual pode causar impactos ambientais e custos maiores no futuro.";

    dicas = `
    • Economize água.<br>
    • Reduza químicos agressivos.<br>
    • Proteja contra erosão.<br>
    • Invista em práticas regenerativas.
    `;
  }

  resultado.innerHTML = `
    <div class="resultado-box">

      <h3>${titulo}</h3>

      <p><strong>Área analisada:</strong> ${area} hectares</p>
      <p><strong>Índice Sustentável:</strong> ${pontos}%</p>

      <br>

      <p><strong>Nível Atual:</strong> ${nivel}</p>
      <p><strong>Situação do Solo:</strong> ${solo}</p>
      <p><strong>Potencial de Economia:</strong> ${economia}</p>
      <p><strong>Foco Principal:</strong> ${principal}</p>

      <br>

      <p>${texto}</p>

      <br>

      <button class="btn" onclick="abrirDicas()">Saber Mais</button>

      <div id="maisInfo" class="extra">
        <h4>Plano Recomendado 🌱</h4>
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
