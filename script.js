/* Utils */
function isWrongInput(logicTest) {
  if (logicTest) return true;

  return false;
}

// Notification
function containerDiv(containerClass, text) {
  const containerElement = document.createElement('div');
  containerElement.classList.add(containerClass);

  const pElement = document.createElement('p');
  pElement.innerText = text;
  containerElement.appendChild(pElement);

  return containerElement;
}

function callNotification(targetElement, actionText) {
  targetElement.classList.add(actionText);
}

function hideNotification(targetElement, actionText) {
  targetElement.classList.remove(actionText);
}

function notify(timeNotification, text, containerClass, actionClass) {
  const timeDelay = 50;
  const containerEl = containerDiv(containerClass, text);
  const transitionTime = 500;

  document.body.appendChild(containerEl);

  setTimeout(() => { callNotification(containerEl, actionClass); }, timeDelay);
  setTimeout(() => { hideNotification(containerEl, actionClass); }, timeDelay + timeNotification);
  setTimeout(() => { containerEl.remove(); }, timeDelay + transitionTime + timeNotification);
}

/* List Behaviour */
// Add Item Behaviour
function addListItem(parentElement, inputElement) {
  const liElement = document.createElement('li');

  if (isWrongInput(inputElement.value === '')) {
    alert('Insira um valor válido');
    return null;
  }
  liElement.innerHTML = inputElement.value;
  parentElement.appendChild(liElement);

  const ntfMsg = `"${liElement.innerText}" Adicionado`;
  notify(1500, ntfMsg, 'ntfy-top-add', 'open');
  return liElement;
}

function buttonListenerAddItem(buttonTarget, olElement, inputElement) {
  const inputEl = inputElement;
  buttonTarget.addEventListener('click', () => {
    addListItem(olElement, inputEl);
    inputEl.value = '';
  });
}

// Click Item Behavior
function applyStyles(selector, styleObject) {
  const queryElements = document.querySelectorAll(selector);
  const queryKeys = Object.keys(queryElements);
  const styleKeys = Object.keys(styleObject);

  for (let queryIndex = 0; queryIndex < queryKeys.length; queryIndex += 1) {
    const queryElement = queryElements[queryIndex];
    for (let styIndex = 0; styIndex < styleKeys.length; styIndex += 1) {
      const styleKey = styleKeys[styIndex];
      queryElement.style[styleKey] = styleObject[styleKey];
    }
  }
}
function manageSelected(elementTarget) {
  const selectedElement = document.querySelector('.selected');

  if (selectedElement === null) {
    elementTarget.classList.add('selected');
  } else selectedElement.classList.remove('selected');

  elementTarget.classList.add('selected');
}
function colorListItemBehaviourEventListener(olElement) {
  olElement.addEventListener('click', (e) => {
    const { target } = e;
    const { localName } = target;
    applyStyles('#lista-tarefas li', { backgroundColor: '' });
    if (localName === 'li') {
      manageSelected(target);
    }
  });

  olElement.addEventListener('dblclick', (e) => {
    const isSelected = e.target.classList.contains('selected');
    const isCompleted = e.target.classList.contains('completed');
    if (isSelected && !isCompleted) e.target.classList.add('completed');
    else e.target.classList.remove('completed');
  });
}

/* Remove All List Items */
function clearList(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const ulEl = olElement;
    ulEl.innerHTML = '';
    notify(1500, 'Todos os itens deletados', 'ntfy-top-delete', 'open');
  });
}

/* Remove Completed Tasks */
function removeDoneEvnLst(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const doneEl = document.querySelectorAll('.completed');
    const doneElemKeys = Object.keys(doneEl);

    for (let i = 0; i < doneElemKeys.length; i += 1) {
      olElement.removeChild(doneEl[i]);
    }

    notify(1500, 'Todos os itens completados foram deletados', 'ntfy-top-delete-completed', 'open');
  });
}

/* Save List */
function saveElements(buttonElement, olElement) {
  buttonElement.addEventListener('click', () => {
    const currentList = olElement.innerHTML;
    console.log(currentList);
    localStorage.listSaved = currentList;
    notify(1500, 'Itens salvos', 'ntfy-top-save-list', 'open');
  });
}
function getSavedList(olElement) {
  const listSaved = localStorage.getItem('listSaved');

  if (listSaved !== null) {
    const olEl = olElement;
    olEl.innerHTML = localStorage.listSaved;
  }
}

/* Move List Items */
function moveItemUp(buttonUpElement, olElement) {
  buttonUpElement.addEventListener('click', () => {
    const listElement = olElement;
    const itemSelected = document.querySelector('.selected');
    if (itemSelected === null) return console.log('Nada selecionado /\\');

    const previousLi = itemSelected.previousElementSibling;
    if (previousLi !== null) {
      listElement.insertBefore(itemSelected, previousLi);
    }
  });
}
function moveItemDown(buttonUpElement, olElement) {
  buttonUpElement.addEventListener('click', () => {
    const listElement = olElement;
    const itemSelected = document.querySelector('.selected');
    if (itemSelected === null) return console.log('Nada selecionado \\/');
    const nextLi = itemSelected.nextElementSibling;
    if (nextLi !== null && nextLi !== undefined) {
      listElement.insertBefore(nextLi, itemSelected);
    }
  });
}

/* Remove Selected Button */
function removeSelected(buttonRemoveElement, olElement) {
  buttonRemoveElement.addEventListener('click', () => {
    const selectedItem = document.querySelector('.selected');
    const olList = olElement;
    const deleted = `"${selectedItem.innerText}" foi removido`;
    notify(1500, deleted, 'ntfy-top-delete', 'open');
    if (selectedItem !== null) olList.removeChild(selectedItem);
  });
}

/* Requirement 05 */
const buttonAddElement = document.getElementById('criar-tarefa');
const buttonClearElement = document.getElementById('apaga-tudo');
const buttonRemoveDoneElement = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonRemoveSelected = document.getElementById('remover-selecionado');

const olElement = document.getElementById('lista-tarefas');
const inputElement = document.getElementById('texto-tarefa');

getSavedList(olElement);

buttonListenerAddItem(buttonAddElement, olElement, inputElement);
colorListItemBehaviourEventListener(olElement);
clearList(buttonClearElement, olElement);
removeDoneEvnLst(buttonRemoveDoneElement, olElement);
saveElements(buttonSaveList, olElement);
moveItemUp(buttonMoveUp, olElement);
moveItemDown(buttonMoveDown, olElement);
removeSelected(buttonRemoveSelected, olElement);
