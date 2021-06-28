/* 5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo */
/* Ref.: https://www.w3schools.com/js/js_events.asp */
const orderedList = document.getElementById('lista-tarefas');

const updateLocalStorage = () => { localStorage.setItem('lists', orderedList.innerHTML); };

const addTask = () => {
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    const tasklist = document.createElement('li');
    const inputTask = document.getElementById('texto-tarefa');

    tasklist.innerText = inputTask.value;
    orderedList.appendChild(tasklist);
    inputTask.value = '';
  });
};

addTask();

/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */
/* 8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo */

function selectTask() {
  const list = document.querySelector('#lista-tarefas');
  list.addEventListener('click', (event) => {
    event.target.classList.add('selected');
    const lines = document.querySelectorAll('li');
    for (let index = 0; index < lines.length; index += 1) {
      if (lines[index] !== event.target) {
        lines[index].classList.remove('selected');
      }
    }
  });
}
selectTask();

/* 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item */
function doubleClick(event) {
  const itemDoubleClicked = event.target;
  if (itemDoubleClicked.classList.contains('completed')) {
    itemDoubleClicked.classList.remove('completed');
  } else {
    itemDoubleClicked.classList.add('completed');
  }
}
orderedList.addEventListener('dblclick', doubleClick);

/* Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista */
const Erase = document.querySelector('#apaga-tudo');

function eraseList() {
  orderedList.innerHTML = '';
}

Erase.addEventListener('click', eraseList);

/* 11 - Adicione um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista */
const completedRemove = (completed) => {
  for (let index = 0; index < completed.length; index += 1) {
    if (completed[index].classList.contains('completed')) {
      completed[index].remove();
    }
  }
};

const finalizados = document.querySelector('#remover-finalizados');
const eraseCompleted = () => {
  const list = document.getElementsByTagName('li');
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < list.length; index += 1) {
    if (list[index].classList.contains('completed')) {
      completedRemove(completed);
    }
  }
};

finalizados.addEventListener('click', eraseCompleted);

/* 12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava */
const save = document.querySelector('#salvar-tarefas');
save.addEventListener('click', updateLocalStorage);

const list = () => {
  orderedList.innerHTML = localStorage.getItem('lists');
};

console.log(localStorage.getItem('lists'));

window.onload = function init() {
  list();
};
