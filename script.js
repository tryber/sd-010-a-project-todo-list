const btnAdicionar = document.getElementById('criar-tarefa');
const inputTarefa = document.getElementById('texto-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const btnLimparLista = document.getElementById('apaga-tudo');
const btnLimparCompletos = document.getElementById('remover-finalizados');

btnAdicionar.addEventListener('click', () => {
  const text = inputTarefa.value;
  const tarefa = document.createElement('li');
  tarefa.innerText = text;
  toDoList.appendChild(tarefa);
  inputTarefa.value = '';
});

toDoList.addEventListener('dblclick', (event) => {
  const item = event.target;
  item.classList.toggle('completed');
});

toDoList.addEventListener('click', (event) => {
  const item = event.target;
  const listItems = document.querySelectorAll('#lista-tarefas li');
  for (let index = 0; index < listItems.length; index += 1) {
    listItems[index].classList.remove('grayBackground');
  }
  item.classList.add('grayBackground');
});

btnLimparLista.addEventListener('click', () => {
  toDoList.innerHTML = '';
});

btnLimparCompletos.addEventListener('click', () => {
  const listItems = document.querySelectorAll('#lista-tarefas li');
  const numberOfItems = listItems.length;
  for (let index = numberOfItems - 1; index >= 0; index -= 1) {
    if (listItems[index].classList.contains('completed')) {
      toDoList.removeChild(listItems[index]);
    }
  }
});
