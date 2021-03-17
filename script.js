function addTasktoList() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', (e) => {
    const taskList = document.getElementById('lista-tarefas');
    const input = document.getElementById('texto-tarefa');
    if (input.value !== '') {
      const createListItem = document.createElement('li');
      taskList.appendChild(createListItem);
      createListItem.innerHTML = input.value;
      input.value = '';
    }
  });

}

addTasktoList();

function selectItem() {
  const list = document.getElementsByTagName('ol')[0];
  const item = document.getElementsByTagName('li');
  list.addEventListener('click', (e) => {
    const targetEvent = e.target;
    for (let index = 0; index < item.length; index += 1) {
      item[index].style.backgroundColor = document.body.style.backgroundColor;
      if (targetEvent.localName === 'li') {
        targetEvent.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}

selectItem();

//Source: https://github.com/tryber/sd-010-a-project-todo-list/pull/85/commits/4499f46b86215b3f5a4167a75d7735f07b144b72 
// consulta ao repositório do Anderson Silva 

function checkItem() {
  const list = document.getElementsByTagName('ol')[0];
  list.addEventListener('dblclick', (e) => {
    const targetEvent = e.target;
      if (targetEvent.classList.contains('completed')) {
        targetEvent.classList.remove('completed');
      } else {
        targetEvent.classList.add('completed');
      }
  });
}

checkItem();

// Consulta ao repositório do Anderson Silva para eventuais correções no código.
// Source: https://github.com/tryber/sd-010-a-project-todo-list/pull/85/
