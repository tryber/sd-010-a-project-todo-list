let captureOl = document.querySelector('#lista-tarefas');
function clearSelectedItems() {
  const captureListItems = captureOl.childNodes;
  for (let i = 0; i < captureListItems.length; i += 1) {
    captureListItems[i].style.backgroundColor = 'white';
  }
}

function altColorClick() {
  const captureListItems = captureOl.childNodes;
  for (let i = 0; i < captureListItems.length; i += 1) {
    captureListItems[i].addEventListener('click', (event) => {
      clearSelectedItems();
      const events = event;
      events.target.style.backgroundColor = 'rgb(128,128,128)';
    });
  }
}

function deleteAllSelected() {
  const buttonDeleteAllSelected = document.querySelector('#remover-finalizados');
  buttonDeleteAllSelected.addEventListener('click', () => {
    const captureItemsSelected = captureOl.childNodes;
    for (let i = 0; i < captureItemsSelected.length; i += 1) {
      if (captureItemsSelected[i].className === 'completed') {
        captureOl.removeChild(captureItemsSelected[i]);
      }
    }
  });
}

function doubleClickThrough() {
  const captureLastitem = captureOl.lastChild;
  if (captureLastitem === null) {
    return;
  }
  captureLastitem.addEventListener('dblclick', (event) => {
    const events = event;
    if (events.target.className === '') {
      events.target.className = 'completed';
    } else if (events.target.className === 'completed') {
      events.target.className = '';
    }
    deleteAllSelected();
  });
}

function deleteAll() {
  const buttonDeleteAll = document.querySelector('#apaga-tudo');
  buttonDeleteAll.addEventListener('click', () => {
    while (captureOl.lastElementChild) {
      captureOl.removeChild(captureOl.lastElementChild);
    }
  });
}

function getItemsLocalStorage() {
  if (localStorage.getItem('listItems') !== undefined) {
    const listTaskItems = localStorage.getItem('listItems');
    const attListItems = captureOl;
    attListItems.innerHTML = JSON.parse(listTaskItems);
    altColorClick(); // ao clicar em um item faz o background ficar cinza;
    // altListItems();
    doubleClickThrough(); // ao clicar 2x no item o grifa.
    deleteAll();
  }
}

function saveTasksLocalStorage() { // esta função deve ser chamada toda vez que eu completar alguma task
  const listTasks = captureOl;
  localStorage.clear();
  console.log('Clear in localStorage.');
  localStorage.setItem('listItems', JSON.stringify(listTasks.innerHTML));
}

function getSaveAllTasksButton() {
  const salvarTudo = document.querySelector('#salvar-tarefas');
  salvarTudo.addEventListener('click', () => {
    saveTasksLocalStorage();
    console.log('Clicou em salvar tarefas');
  });
}

function captureText() {
  const captureInputText = document.querySelector('#texto-tarefa');
  return captureInputText.value;
}

function clearInput() {
  const captureInputText = document.querySelector('#texto-tarefa');
  captureInputText.value = '';
}

function insertItemTask() {
  const captureButton = document.querySelector('#criar-tarefa');
  captureButton.addEventListener('click', () => {
    captureOl = document.querySelector('#lista-tarefas');
    const task = captureText();
    if (task === '') {
      alert('Insira uma tarefa para conseguir adicionar.');
    } else {
      const newItem = document.createElement('li');
      newItem.innerHTML = task;
      captureOl.appendChild(newItem);
      clearInput();
      altColorClick(); // ao clicar em um item faz o background ficar cinza;
      // altListItems();
      doubleClickThrough(); // ao clicar 2x no item o grifa.
      deleteAll();
    }
  });
}

window.onload = () => {
  getSaveAllTasksButton();
  console.log('onload');
};
 
insertItemTask(); // função disparada ao clicar no botão "adicionar";
getItemsLocalStorage();
