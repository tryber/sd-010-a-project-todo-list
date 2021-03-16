function addTaskToList() {
  const ol = document.getElementById('lista-tarefas');
  const btnAddTask = document.getElementById('criar-tarefa');
  const inputText = document.getElementById('texto-tarefa');
  btnAddTask.addEventListener('click', () => {
    if (inputText.value.length > 0) {
      const li = document.createElement('li');
      li.innerHTML = inputText.value;
      li.classList.add('task');
      ol.appendChild(li);
      inputText.value = '';
    } else {
      alert('Digite uma tarefa');
    }
  });
}

function removeSelected() {
  const taskItems = document.querySelectorAll('.task');
  for (let index = 0; index < taskItems.length; index += 1) {
    taskItems[index].classList.remove('selected');
  }
}

function selectedTask() {
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('click', (e) => {
    removeSelected();
    e.target.classList.add('selected');
  });
}

function completedTask() {
  const tasksList = document.querySelector('ol');
  tasksList.addEventListener('dblclick', (e) => {
    e.target.classList.toggle('completed');
  });
}

function addButton(id, text) {
  const btn = document.createElement('button');
  const section = document.getElementById('buttons');
  btn.id = id;
  if (text === undefined) {
    btn.innerText = '';
  } else {
    btn.innerText = text;
  }
  section.appendChild(btn);
}

function clearTaksList() {
  const btn = document.getElementById('apaga-tudo');
  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      lis[index].remove();
    }
  });
}

function clearCompletedTasks() {
  const btn = document.querySelector('#remover-finalizados');
  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      if (lis[index].classList.contains('completed')) {
        lis[index].remove();
      }
    }
  });
}

function saveTasks() {
  const btn = document.getElementById('salvar-tarefas');
  btn.addEventListener('click', () => {
    const lis = document.querySelectorAll('.task');
    for (let index = 0; index < lis.length; index += 1) {
      const savedTasks = {
        text: lis[index].innerText,
        class: lis[index].className,
      };
      localStorage.setItem(index, JSON.stringify(savedTasks));
    }
  });
}

function getTasks() {
  const ol = document.getElementById('lista-tarefas');
  for (let index = 0; index < localStorage.length; index += 1) {
    const li = document.createElement('li');
    const localTask = JSON.parse(localStorage.getItem(index));
    li.innerText = localTask.text;
    li.className = localTask.class;
    li.classList.remove('selected');
    ol.appendChild(li);
  }
}

function checkIndex(array, element) {
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === element) {
      return index;
    }
  }
}

function moveUp() {
  const list = document.querySelectorAll('.task');
  const btn = document.getElementById('mover-cima');
  btn.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected === list[0]) {
      const classe = list[0].className;
      const text = list[0].innerText;
      for (let index = 0; index < list.length - 1; index += 1) {
        list[index].innerText = list[index + 1].innerText;
        list[index].className = list[index + 1].className;
      }
      list[list.length - 1].innerText = text;
      list[list.length - 1].className = classe;
    } else {
      const indexOfSelected = checkIndex(list, selected);
      const text = list[indexOfSelected].innerText;
      const classe = list[indexOfSelected].className;
      list[indexOfSelected].className = list[indexOfSelected - 1].className;
      list[indexOfSelected].innerText = list[(indexOfSelected - 1)].innerText;
      list[(indexOfSelected - 1)].innerText = text;
      list[indexOfSelected - 1].className = classe;
    }
  });
}

function moveDown() {
  const list = document.getElementsByClassName('task');
  const btn = document.getElementById('mover-baixo');
  btn.addEventListener('click', () => {
    const selected = document.getElementsByClassName('selected')[0];
    if (selected.length !== 0) {
      if (selected === list[list.length - 1]) {
        const classe = list[list.length - 1].className;
        const text = list[list.length - 1].innerText;
        for (let index = list.length - 1; index > 0; index -= 1) {
          list[index].innerText = list[index - 1].innerText;
          list[index].className = list[index - 1].className;
        }
        list[0].innerText = text;
        list[0].className = classe;
      } else {
        const indexOfSelected = checkIndex(list, selected);
        const text = list[indexOfSelected].innerText;
        const classe = list[indexOfSelected].className;
        list[indexOfSelected].className = list[indexOfSelected + 1].className;
        list[indexOfSelected].innerText = list[(indexOfSelected + 1)].innerText;
        list[(indexOfSelected + 1)].innerText = text;
        list[indexOfSelected + 1].className = classe;
      }
    }
  });
}

function removeSelectedTask() {
  const selected = document.getElementsByClassName('selected');
  const btn = document.getElementById('remover-selecionado');
  const tasks = document.querySelectorAll('li');
  btn.addEventListener('click', () => {
    if (selected.length !== 0) {
      for (let index = 0; index < tasks.length; index += 1) {
        if (tasks[index].classList.contains('selected')) {
          tasks[index].remove();
        }
      }
    }
  });
}

window.onload = () => {
  addTaskToList();
  selectedTask();
  completedTask();
  addButton('apaga-tudo', 'Apagar tarefas');
  addButton('remover-finalizados', 'Remover finalizados');
  addButton('salvar-tarefas', 'Salvar tarefas');
  addButton('mover-cima', '↑');
  addButton('mover-baixo', '↓');
  addButton('remover-selecionado', 'Remover');
  clearTaksList();
  clearCompletedTasks();
  saveTasks();
  getTasks();
  moveUp();
  moveDown();
  removeSelectedTask();
};
