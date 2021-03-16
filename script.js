function addNewTask() {
  const textTask = document.querySelector('#texto-tarefa').value;
  const taskList = document.querySelector('#lista-tarefas');
  const newList = document.createElement('li');
  if (textTask === '') {
    alert('Você deve adicionar uma tarefa');
  } else {
    taskList.appendChild(newList);
    newList.innerText = textTask;
    newList.style.backgroundColor = '';
    newList.addEventListener('click', function () {
      clearBgColor();
      newList.classList.add('color');
    });
    newList.addEventListener('dblclick', function () {
      console.log('duploclick aconteceu')
        newList.classList.toggle('completed');    
    });

    function clearAll () {
      document.location.reload();
    }
    const clearBtn = document.querySelector('#apaga-tudo');
    clearBtn.addEventListener('click', clearAll);
    }
}
const addBtn = document.querySelector('#criar-tarefa');
addBtn.addEventListener('click', addNewTask);

function restartInput() {
  const textTask = document.querySelector('#texto-tarefa');
  textTask.value = ('');
}
addBtn.addEventListener('click', restartInput);

function clearBgColor() {
  const coloredBg = document.querySelectorAll('.color');
  for (let index = 0; index < coloredBg.length; index += 1) {
    coloredBg[index].classList.remove('color');
  }
}

