// Requisito 5 - Botão cria tarefa

let lista = document.querySelector('#lista-tarefas');
let input = document.querySelector('#texto-tarefa');

function criaLI() {
  const botao = document.querySelector(".botao");
  botao.addEventListener("click", (evento) => {
    let li = document.createElement("li");
    lista.appendChild(li).innerHTML;
    li.innerText = input.value;
    input.value = '';
    console.log(lista);
  });
  
}
criaLI();

// Requisito 7 - Pinta tarefa
function pintaTarefa (){
const lista = document.getElementsByTagName('ol')[0];
const tarefa = document.getElementsByTagName('li');
  lista.addEventListener('click', (event) => {
      const targetEvent = event.target;
      for (let index = 0; index < tarefa.length; index += 1) {
          tarefa[index].style.backgroundColor = document.body.style.backgroundColor;
          if (targetEvent.localName === 'li') {
              targetEvent.style.backgroundColor = 'rgb(128, 128, 128)';
          }
      }
  });
}

pintaTarefa();

// Requisito 8 - Apenas 1 item selecionado por vez.

function selecionaTarefa() {
   let lista = document.querySelector('#lista-tarefas');
  for (let index = 0; index < lista.length; index += 1) {
  lista[index].addEventListener('dbclick',() => {
    for (let i = 0; i < lista.length; i += 1) {
    lista[i] .style.textDecoration = line-through;
     //}
     //lista[index].textDecoration: none;
 }
})
}
}

// Requisito 9 - Botão apaga tarefas

function limpaTarefas () {
  const botaoApagar = document.getElementById('apaga-tudo');
  let lista = document.querySelector('#lista-tarefas');
  botaoApagar.addEventListener('click', () => {
  const textContent = document.querySelector('#lista-tarefas');
  textContent.innerHTML = '';   
  })
}    
  
  limpaTarefas()