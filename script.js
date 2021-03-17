function addInputToList() {
  const getInputText = document.getElementById('texto-tarefa');
  const getBtn = document.getElementById('criar-tarefa');
  const getList = document.getElementById('lista-tarefas');
  getBtn.addEventListener('click', function () {
    const createListItem = document.createElement('li');
    createListItem.innerText = getInputText.value;
    getList.appendChild(createListItem);
    getInputText.value = '';
  });
}

addInputToList();

function itemListEvents() {
  const getList = document.getElementById('lista-tarefas');
  getList.addEventListener('click', function selectItemList(event) {
    const getListItem = document.getElementsByTagName('li');
    for (let index = 0; index < getListItem.length; index += 1) {
      getListItem[index].classList.remove('selected');
    }
    if (event.target.className === 'selected') {
      event.target.classList.remove('selected');
    } else {
      event.target.classList.add('selected');
    }
  });
  getList.addEventListener('dblclick', function completeItemList(event) {
    if (event.target.className === 'completed selected') {
      event.target.classList.remove('completed');
    } else {
      event.target.classList.add('completed');
    }
  });
}

itemListEvents();
