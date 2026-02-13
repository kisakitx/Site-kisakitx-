let idioma = "pt";

/* =========================
   ADICIONAR FILME
========================= */

function addFilme(){

  let nome = document.getElementById("nomeFilme").value;
  let capa = document.getElementById("capa").files[0];
  let link = document.getElementById("linkVideo").value;

  if(!nome || !capa || !link){
    alert("Preencha tudo!");
    return;
  }

  let id = pegarID(link);

  if(!id){
    alert("Link do YouTube inválido!");
    return;
  }

  let div = document.createElement("div");
  div.className = "filme";

  let img = document.createElement("img");
  img.src = URL.createObjectURL(capa);

  let p = document.createElement("p");
  p.innerText = nome;

  /* BOTÃO APAGAR */
  let btnDel = document.createElement("button");
  btnDel.innerText = "🗑️ Apagar";
  btnDel.className = "btn-del";

  btnDel.onclick = (e)=>{
    e.stopPropagation();

    if(confirm("Quer apagar este filme?")){
      div.remove();
    }
  }

  div.appendChild(img);
  div.appendChild(p);
  div.appendChild(btnDel);

  div.onclick = ()=>{
    selecionar(div);
    abrirPlayer(id);
  }

  document.getElementById("catalogo").appendChild(div);

  // Limpar campos
  document.getElementById("nomeFilme").value="";
  document.getElementById("linkVideo").value="";
  document.getElementById("capa").value="";
}


/* =========================
   SELECIONAR FILME
========================= */

function selecionar(el){

  document.querySelectorAll(".filme").forEach(f=>{
    f.classList.remove("ativo");
  });

  el.classList.add("ativo");
}


/* =========================
   PLAYER YOUTUBE
========================= */

function abrirPlayer(id){

  let player = document.getElementById("player");

  player.src =
   "https://www.youtube.com/embed/" + id + "?autoplay=1";

  document.getElementById("playerBox").style.display="flex";
}

function fecharPlayer(){

  let player = document.getElementById("player");

  player.src = "";

  document.getElementById("playerBox").style.display="none";
}


/* =========================
   IDIOMA PLAYER
========================= */

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


/* =========================
   CONFIGURAÇÕES
========================= */

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


/* =========================
   PEGAR ID YOUTUBE
========================= */

function pegarID(url){

  if(url.includes("youtu.be/")){
    return url.split("youtu.be/")[1].split("?")[0];
  }

  if(url.includes("youtube.com/watch")){
    return url.split("v=")[1].split("&")[0];
  }

  return null;
}