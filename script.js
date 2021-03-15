// Variáveis e atribuições
const paragraph = document.getElementById('funcionamento');
paragraph.innerText = 'Clique duas vezes em um item para marcá-lo como completo';
const taskList = document.getElementById('lista-tarefas');
const buttonInsertItem = document.getElementById('criar-tarefa');
buttonInsertItem.innerText = 'Inserir';
const buttonClear = document.getElementById('apaga-tudo');
buttonClear.innerText = 'Apagar';
const buttonClearCompleted = document.getElementById('remover-finalizados');
buttonClearCompleted.innerText = 'Remover Finalizados';
const inputList = document.getElementById('texto-tarefa');
const listClick = document.getElementsByTagName('ol')[0];
const listItens = document.getElementsByTagName('li');
const buttonSave = document.getElementById('salvar-tarefas');
buttonSave.innerText = 'Salvar';

buttonInsertItem.addEventListener('click', () => {
  if (inputList.value === '') {
    alert('Digite uma tarefa válida!');
  } else {
    const listItem = document.createElement('li');
    listItem.innerText = inputList.value;
    taskList.appendChild(listItem);
  }
  inputList.value = '';
});

// Requisito 10
buttonClear.addEventListener('click', () => {
  taskList.innerHTML = '';
});

// requisito 7 e requisito 8
function selectItem() {
  listClick.addEventListener('click', (event) => {
    const clickEvent = event.target;
    for (let index = 0; index < listItens.length; index += 1) {
      listItens[index].style.backgroundColor = document.body.style.backgroundColor;
      if (clickEvent.localName === 'li') {
        clickEvent.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
selectItem();

// Requisito 9
// ajuda do Lucas Godoi - turma 10 - tribo A
function markTasksDone() {
  taskList.addEventListener('dblclick', (event) => {
    const eventItem = event.target;
    if (eventItem.classList.contains('completed')) {
      eventItem.classList.remove('completed');
    } else {
      eventItem.classList.add('completed');
    }
  });
}
markTasksDone();

// requisito 11
function removeCompleted() {
  buttonClearCompleted.addEventListener('click', () => {
    const completedClass = document.querySelectorAll('.completed');
    for (let index = 0; index < completedClass.length; index += 1) {
      listClick.removeChild(completedClass[index]);
    }
  });
}
removeCompleted();

// requisito 12
function saveTasks() {
  buttonSave.addEventListener('click', () => {
    localStorage.setItem('listItens', listClick.innerHTML);
  });
}
saveTasks();

function getTasks() {
  listClick.innerHTML = localStorage.getItem('listItens');
}
getTasks();
