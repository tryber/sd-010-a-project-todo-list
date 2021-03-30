const taskbutton = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const eraseAll = document.getElementById('apaga-tudo');
const eraseCompleted = document.getElementById('remover-finalizados');
const eraseSelected = document.getElementById('remover-selecionado');

taskbutton.addEventListener('click', function() {
  const newtask = document.createElement('li');
  newtask.innerText = inputTarefa.value;
  listaDeTarefas.appendChild(newtask);
  newtask.addEventListener('click', paintBackground);
  newtask.addEventListener('dblclick', completedTAsk);
  let tarefas = document.getElementsByTagName('li');
  inputTarefa.value = null;
});

function paintBackground(event) {
      for( let index = 0; index < listaDeTarefas.childNodes.length; index += 1){
        listaDeTarefas.childNodes[index].classList.remove('task-selection')
        }
      event.target.classList.add('task-selection');
}

function completedTAsk(event) {
  event.target.classList.toggle('completed');
}


eraseAll.addEventListener('click', function() {
  while (listaDeTarefas.firstChild) {
    listaDeTarefas.removeChild(listaDeTarefas.firstChild);
  }
})

eraseCompleted.addEventListener('click', function() {
const tarefasCompletas = document.querySelectorAll('.completed');
  for(let index = 0; index < tarefasCompletas.length; index += 1 ) {
    if(tarefasCompletas[index].className === 'completed') {
      listaDeTarefas.removeChild(tarefasCompletas[index])
    }else if(tarefasCompletas[index].className === 'task-selection completed') {
      listaDeTarefas.removeChild(tarefasCompletas[index])
    }
  }
})

// a função eraseCompleted e saveTasks foram baseadas no código da Ana Ventura
function saveTasks() {
  localStorage.listaDeTarefas = listaDeTarefas.innerHTML;
}

const btnSalvarLista = document.getElementById('salvar-tarefas');
if(typeof Storage !== 'undefined' && localStorage.listaDeTarefas) {
  listaDeTarefas.innerHTML = localStorage.listaDeTarefas
}

window.onload = function initial() {
  btnSalvarLista.addEventListener('click', saveTasks);
}

eraseSelected.addEventListener('click', function() {
  const tarefaSelecionada = document.querySelectorAll('.task-selection')
  for(let index = 0; index < tarefaSelecionada.length; index += 1) {
    if(tarefaSelecionada[index].className === 'task-selection') {
      listaDeTarefas.removeChild(tarefaSelecionada[index])
    }
  }
})
