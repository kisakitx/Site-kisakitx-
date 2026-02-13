let idioma = "pt";

function addFilme(){

  let nome = document.getElementById("nomeFilme").value;
  let capa = document.getElementById("capa").files[0];
  let video = document.getElementById("video").files[0];

  if(!nome || !capa || !video){
    alert("Preencha tudo!");
    return;
  }

  let div = document.createElement("div");
  div.className = "filme";

  let img = document.createElement("img");
  img.src = URL.createObjectURL(capa);

  let p = document.createElement("p");
  p.innerText = nome;

  div.appendChild(img);
  div.appendChild(p);

  div.onclick = ()=>{
  selecionar(div);
  abrirPlayer(video);
}

// BOTÃO APAGAR
let btnDel = document.createElement("button");
btnDel.innerText = "🗑️ Apagar";
btnDel.className = "btn-del";

btnDel.onclick = (e)=>{
  e.stopPropagation();

  if(confirm("Quer apagar este filme?")){
    div.remove();
  }
}

div.appendChild(btnDel);

  document.getElementById("catalogo").appendChild(div);

  document.getElementById("nomeFilme").value = "";
}

function selecionar(el){

  document.querySelectorAll(".filme").forEach(f=>{
    f.classList.remove("ativo");
  });

  el.classList.add("ativo");
}

function abrirPlayer(video){

  let player = document.getElementById("player");
  player.src = URL.createObjectURL(video);

  document.getElementById("playerBox").style.display = "flex";
}

function fecharPlayer(){
  document.getElementById("playerBox").style.display = "none";
}

function toggleIdioma(){

  let box = document.getElementById("idiomaBox");

  if(box.style.display=="block"){
    box.style.display="none";
  }else{
    box.style.display="block";
  }
}

function setIdioma(lang){

  idioma = lang;

  alert("Idioma: " + (lang=="pt"?"Português":"Inglês"));

  document.getElementById("idiomaBox").style.display="none";
}

/* CONFIG */

function abrirConfig(){
  document.getElementById("configBox").style.display="flex";
}

function fecharConfig(){
  document.getElementById("configBox").style.display="none";
}

function trocarFundo(){

  let img = document.getElementById("fundo").files[0];

  if(!img){
    alert("Escolha uma imagem");
    return;
  }

  document.body.style.backgroundImage =
    `url(${URL.createObjectURL(img)})`;
}