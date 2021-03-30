const taskList = document.querySelector('#lista-tarefas');

document.querySelector('#criar-tarefa').addEventListener('click', () => {
  const inputText = document.querySelector('#texto-tarefa');
  const listItem = document.createElement('li');
  listItem.innerText = inputText.value;
  taskList.appendChild(listItem);
  inputText.value = '';
});

taskList.addEventListener('click', (newSelected) => {
  const selected = document.querySelector('.selected');
  if (selected) {
    selected.classList.remove('selected');
    newSelected.target.classList.add('selected');
  } else newSelected.target.classList.add('selected');
});

taskList.addEventListener('dblclick', (completed) => {
  const completedClass = completed.target.classList;
  if (completedClass.contains('completed')) completedClass.remove('completed');
  else completedClass.add('completed');
});

document.querySelector('#apaga-tudo').addEventListener('click', () => { taskList.innerText = ''; });

document.querySelector('#remover-finalizados').addEventListener('click', () => {
  const completedTasks = document.querySelectorAll('.completed');
  for (let i = 0; i < completedTasks.length; i += 1) completedTasks[i].remove();
});
