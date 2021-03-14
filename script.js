const buttonTask = document.getElementById('criar-tarefa');
const inputTask = document.getElementById('texto-tarefa');
const listTask = document.getElementById('lista-tarefas');
const deleteAll = document.getElementById('apaga-tudo');
const saveList = document.getElementById('salvar-tarefas');

// REQUISITO 5 E 6 //

function addTask() {
  buttonTask.addEventListener('click', () => {
    const getList = document.createElement('li');
    getList.innerText = inputTask.value;
    getList.className = 'task';
    listTask.appendChild(getList);
    inputTask.value = '';
  });
}

// REQUISITO 7 E 8 //

function getGray() {
  listTask.addEventListener('click', (event) => {
    for (let index = 0; index < listTask.children.length; index += 1) {
      listTask.children[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// REQUISITO 9 //

function completeItem() {
  listTask.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
  });
}
// toggle - para alternar para CLASS //

// REQUISITO 10//

function clearList() {
  deleteAll.addEventListener('click', () => {
    const taskLi = document.querySelectorAll('.task');
    for (let index = 0; index < taskLi.length; index += 1) {
      taskLi[index].remove();
    }
  });
}

// REQUISITO 11 //

function finishedRemove() {
  const buttonFinish = document.querySelector('#remover-finalizados');
  buttonFinish.addEventListener('click', () => {
    const finish = document.querySelectorAll('.completed');
    if (finish.length !== 0) {
      for (let index = 0; index < finish.length; index += 1) {
        finish[index].remove();
      }
    }
  });
}

// REQUISITO 12 //

function saveTask() {
  saveList.addEventListener('click', () => {
    const taskLi = document.querySelectorAll('.task');
    for (let index = 0; index < taskLi.length; index += 1) {
      const saveInformation = {
        text: taskLi[index].innerText, // salvar as informações digitadas pelo usuário //
        class: taskLi[index].className, // salvando todas as classes que tem dentro do elemento //
      };
      localStorage.setItem(index, JSON.stringify(saveInformation));
    }
  });
}

function recoverList() {
  const recoverTask = document.getElementById('lista-tarefas');
  for (let index = 0; index < listTask.length; index += 1) {
    const recoverItem = document.createElement('li');
    const recoverSaveInformation = JSON.parse(localStorage.getItem(index));
    recoverItem.innerText = recoverSaveInformation.text;
    recoverItem.className = recoverSaveInformation.class;
    recoverItem.classList.remove('selected');
    recoverTask.appendChild(recoverItem);
  }
}

window.onload = () => {
  addTask();
  getGray();
  completeItem();
  clearList();
  finishedRemove();
  saveTask();
  recoverList();
};
