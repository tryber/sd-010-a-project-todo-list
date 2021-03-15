const maker = document.querySelector('#criar-tarefa');
maker.addEventListener('click', () => { // function newTask
  const task = document.querySelector('#texto-tarefa');
  const theTask = document.createElement('li');
  const theList = document.querySelector('#lista-tarefas');
  theTask.innerHTML = task.value;
  theTask.classList.add('task');
  theList.appendChild(theTask);
  task.value = '';
});

/* const tasks = document.querySelectorAll('.task');
  for (let index = 0; index < tasks.length; index += 1) {
    tasks[index].addEventListener('click' (element) => {
      const remove = document.querySelector('.bkGray');
  if (remove === null) {
    element.target.classList.add('bkGray');
  } else {
    remove.classList.remove('bkGray');
    element.target.classList.add('bkGray');
  }
    });
  }; */
const theList = document.querySelector('#lista-tarefas');
theList.addEventListener('click', (element) => { //  function mark
  const remove = document.querySelector('.bkGray');
  if (remove === null) {
    element.target.classList.add('bkGray');
  } else {
    remove.classList.remove('bkGray');
    element.target.classList.add('bkGray');
  }
});

theList.addEventListener('dblclick', (element) => { // function risc
  const elementRisc = element.target;
  const test = elementRisc.getAttribute('class');
  if (test.includes('completed')) {
    elementRisc.classList.remove('completed');
  } else {
    elementRisc.classList.add('completed');
  }
});
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const clear = document.querySelector('#apaga-tudo');
clear.addEventListener('click', () => { // function clearAll
  const task = document.querySelectorAll('.task');
  for (let index = 0; index < task.length; index += 1) {
    theList.removeChild(task[index]);
  }
});

const finishClear = document.querySelector('#remover-finalizados');
finishClear.addEventListener('click', () => { // function finishHim
  const him = document.querySelectorAll('.completed');
  for (let index = 0; index < him.length; index += 1) {
    theList.removeChild(him[index]);
  }
});

const save = document.querySelector('#salvar-tarefas');
save.addEventListener('click', () => { // function saveData
  localStorage.setItem('lis', theList.innerHTML);
});

window.onload = () => {
  const lis = localStorage.getItem('lis');
  theList.innerHTML = lis;
};

/* Utilizei como referência o código do Angelo Bittencourt turma 10 - tribo B
  https://github.com/tryber/sd-010-b-project-todo-list/pull/32/commits/99a98cd32dc4859c947717f061ce4ba275c4bfd0
  e a documentação do insertBefore
  https://developer.mozilla.org/pt-BR/docs/Web/API/Node/insertBefore
  */
const upArrow = document.querySelector('#mover-cima');
upArrow.addEventListener('click', () => {
  const toUp = document.querySelector('.bkGray');
  if (toUp) {
    if (toUp.previousElementSibling === null) {
      alert('Esta tárefa já está no topo!');
    } else {
      theList.insertBefore(toUp, toUp.previousElementSibling);
    }
  }
});

const downArrow = document.querySelector('#mover-baixo');
downArrow.addEventListener('click', () => {
  const toDown = document.querySelector('.bkGray');
  if (toDown) {
    if (toDown.nextElementSibling === null) {
      alert('Esta tárefa já está como ultima!');
    } else {
      theList.insertBefore(toDown.nextElementSibling, toDown);
    }
  }
});

const removeSelected = document.querySelector('#remover-selecionado');
removeSelected.addEventListener('click', () => {
  const removed = document.querySelector('.bkGray');
  theList.removeChild(removed);
});
