const assignmentText = document.querySelector('#texto-tarefa');
const buttonAdd = document.querySelector('#criar-tarefa');
const assignmentList = document.querySelector('#lista-tarefas');
const buttonRemove = document.querySelector('#apaga-tudo');
const buttonRemoveFinished = document.querySelector('#remover-finalizados');

buttonAdd.addEventListener('click', () => {
  const creatAssignmentListItem = document.createElement('li');
  const assignmentListItem = assignmentList.appendChild(creatAssignmentListItem);
  assignmentListItem.innerText = assignmentText.value;
  assignmentText.value = '';
});

function passGrayColor(e) {
  const listItem = document.querySelectorAll('#lista-tarefas li');
  for (const key of listItem) {
    key.classList.remove('gray-color');
  }
  e.target.classList.add('gray-color');
}
assignmentList.addEventListener('click', passGrayColor);

function crossOutLine(e) {
  e.target.classList.add('completed');
  if (e.target.classList.value === 'completed gray-color') {
    e.target.classList.remove('completed');
  }
}
assignmentList.addEventListener('dblclick', crossOutLine);

buttonRemove.addEventListener('click', () => {
  assignmentList.innerText = '';
});

function removeFinished() {
  const textOutLine = document.querySelectorAll('.completed');
  for (const key of textOutLine) {
    key.remove(textOutLine[key]);
  }
}
buttonRemoveFinished.addEventListener('click', removeFinished);