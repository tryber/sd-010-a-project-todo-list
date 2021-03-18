function criarTarefa() { 
  let criar = document.getElementById("texto-tarefa");
  let tarefa = criar.value;
  let ol = document.getElementById("lista-tarefas");
  let li = document.createElement("li");
  li.classList.add("listaDinamica");
  let texto = document.createTextNode(tarefa);
  li.addEventListener("dblclick", function(e) {
    riscarLista(e);    
   });
  li.addEventListener("click", function(e) {
    coloriLista (e);
   });
  li.appendChild(texto);
  ol.appendChild(li);
  criar.value = "";
}
let btAdicionar = document.getElementById("criar-tarefa");
btAdicionar.addEventListener("click", criarTarefa);

function apagar() {
  let ol = document.getElementById("lista-tarefas");
   if (ol.childElementCount > 0) {
    ol.innerHTML = "";
  }
}
let btnApagar = document.getElementById("apaga-tudo");
btnApagar.addEventListener("click", apagar);

function riscarLista (li) {
  if (li.target.classList.contains("completed")){
    li.target.classList.remove("completed");
  }
  else {
    li.target.classList.add("completed"); 
  }  
}

function coloriLista (colorir) {
   if(!colorir.target.classList.contains("backgroudLista")){
     colorir.target.classList.add("backgroudLista");
  }    
}
