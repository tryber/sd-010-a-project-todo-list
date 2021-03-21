const ol = document.querySelector('#lista-tarefas');
const inputText = document.getElementById('texto-tarefa');
function createT() {
  const li = document.createElement('li');
  ol.appendChild(li);
  li.innerText = inputText.value;
  inputText.value = '';
  li.addEventListener('click', () => {
    const lis = document.querySelectorAll('li');
    for (let index = 0; index < lis.length; index += 1) {
      if ((lis[index].style.backgroundColor === 'rgb(128, 128, 128)')) {
        lis[index].style.backgroundColor = '';
      }
    }
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
  li.addEventListener('dblclick', () => {
    li.classList.toggle('completed');
  });
}

function newTask() {
  const btnNewTask = document.getElementById('criar-tarefa');
  btnNewTask.addEventListener('click', createT);
}
newTask();

function apagaTudo() {
  ol.innerHTML = '';
}
const buttonEraser = document.getElementById('apaga-tudo');
buttonEraser.addEventListener('click', apagaTudo);

function getDoneButton() {
  const doneButton = document.querySelectorAll('.completed');
  console.log(doneButton);
  for (let index = 0; index < doneButton.length; index += 1) {
    doneButton[index].remove();
  }
}
const removeDone = document.getElementById('remover-finalizados');
removeDone.addEventListener('click', getDoneButton);
