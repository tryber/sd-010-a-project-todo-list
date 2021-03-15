const btnAdicionarTarefa = document.getElementById('criar-tarefa');
const inputText = document.getElementById('texto-tarefa');
const listOrdenada = document.getElementById('lista-tarefas');
const btnApagarTarefas = document.getElementById('apaga-tudo');
const btnRemoveTarefa = document.getElementById('remover-finalizados');
const btnSalvarTarefas = document.getElementById('salvar-tarefas');
const btnMoverCima = document.getElementById('mover-cima');
const btnMoverBaixo = document.getElementById('mover-baixo');

// Função responsavel para adicionar um elemento na lista;
function addListInput() {
  btnAdicionarTarefa.addEventListener('click', () => {
    const list = document.createElement('li');
    if (inputText.value !== '') {
      list.innerHTML = inputText.value;
      listOrdenada.appendChild(list);
      list.classList.add('list');
      selectColor(list);
      listCompleted(list);
    }
    clearInput();
  });
}
addListInput();

// Função responsavel por riscar um elemento da lista
function listCompleted(list) {
  list.addEventListener('dblclick', (event) => {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

// Função responsavel para apagar todas tarefas da lista
function clearTarefas() {
  btnApagarTarefas.addEventListener('click', () => {
    listOrdenada.innerHTML = '';
  });
}

// Função responsavel para apagar tarefas selecionadas;
function apagaTarefas() {
  btnRemoveTarefa.addEventListener('click', () => {
    const listCompleted = document.querySelectorAll('.completed');
    for (let index = 0; index < listCompleted.length; index += 1) {
      listOrdenada.removeChild(listCompleted[index]);
      // Ajuda do Murilo, me ajuda a saber a diferença de Node e HTMLcolection
      // para percorer com o <for>
    }
  });
}

// Função para adicionar um click na lista rgb(128,128,128);
function selectColor(list) {
  const arrayList = document.getElementById('lista-tarefas').childNodes;
  list.addEventListener('click', (event) => {
    for (let indexTwo = 0; indexTwo < arrayList.length; indexTwo += 1) {
      arrayList[indexTwo].classList.remove('colorList');
    }
    event.target.classList.add('colorList');
  });
}

// Função para Salvar tarefas
// function salvarTarefas() {
//   btnSalvarTarefas.addEventListener('click', () => {
//     localStorage.listTarefas = listOrdenada.innerHTML;
//   });
//   if (localStorage.listTarefas !== undefined) {
//     listOrdenada.innerHTML = localStorage.listTarefas
//   }
// }

// localStorage.listaTarefas = JSON.stringify()

// Função para mover um elemento para a posição a cima;
function moverCima() {
  btnMoverCima.addEventListener('click', () => {
    const arrayList = document.querySelectorAll('.list');
    for (let index = 0; index < arrayList.length; index += 1) {
      if (arrayList[index].classList.contains('colorList')) {
        const listColorGray = arrayList[index];
        console.log(listColorGray);
      }
    }
    console.log(arrayList);
  });
}

// Função responsavel para limpar o input;
function clearInput() {
  inputText.value = '';
}


window.onload = () => {
  apagaTarefas();
  clearTarefas();
  // salvarTarefas();
  moverCima();
};
