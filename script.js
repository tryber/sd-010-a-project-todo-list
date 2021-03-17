// Requisito 5
const input = document.getElementById('texto-tarefa');
const createTaskBtn = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');

function createTask() {
  if (input.value !== '') {
    const li = document.createElement('li');
    taskList.appendChild(li);
    li.innerHTML = input.value;
    input.value = '';
    li.classList.add('list-item');
  }
}

createTaskBtn.addEventListener('click', createTask);

// Requisito 7 e 8
function paintSelected() {
  const selectTask = taskList;
  selectTask.addEventListener('click', (selectEvent) => {
    const listItem = document.querySelectorAll('.list-item');
    for (let index = 0; index < listItem.length; index += 1) {
      if (listItem[index] === selectEvent.target) {
        selectEvent.target.classList.add('selected');
      } else {
        listItem[index].classList.remove('selected');
      }
    }
  });
}

// Requisito 9
function lineThrough() {
  const selectTask = taskList;

  selectTask.addEventListener('dblclick', (e) => {
    const listItem = document.querySelectorAll('.selected');
    for (let index = 0; index < listItem.length; index += 1) {
      e.target.classList.toggle('completed');
    }
  });
}

lineThrough();
createTask();
paintSelected();
