const listaDeTarefas = document.getElementById('lista-tarefas');
const buttonCriar = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const tarefa = document.getElementsByTagName('li');
const clearButton = document.getElementById('apaga-tudo');
const clearFinished = document.getElementById('remover-finalizados');
const saveTasks = document.getElementById('salvar-tarefas');
const upPosition = document.getElementById('mover-cima');
const downPosition = document.getElementById('mover-baixo');
const removeSelected = document.getElementById('remover-selecionado');

function returnInformation() {
  for (let index = 0; index < (localStorage.length / 3); index += 1) {
    const tarefas = document.createElement('li');
    tarefas.className = localStorage.getItem(`${index} class`);
    tarefas.innerHTML = localStorage.getItem(index);
    listaDeTarefas.appendChild(tarefas);
    listaDeTarefas.children[index].style.textDecoration = localStorage.getItem(`${index} style`);
  }
}

function elements(elementPosition, oldposition) {
  const elementProp = tarefa[elementPosition];
  const newProp = tarefa[oldposition];
  const oldHTML = elementProp.innerHTML;
  const oldBgStyle = elementProp.style.backgroundColor;
  const oldTextDec = elementProp.style.textDecoration;
  const oldClassNam = elementProp.className;
  elementProp.innerHTML = newProp.innerHTML;
  elementProp.style.backgroundColor = newProp.style.backgroundColor;
  elementProp.style.textDecoration = newProp.style.textDecoration;
  elementProp.className = newProp.className;
  newProp.innerHTML = oldHTML;
  newProp.style.backgroundColor = oldBgStyle;
  newProp.style.textDecoration = oldTextDec;
  newProp.className = oldClassNam;
}

returnInformation();

function criarTarefa() {
  const tarefas = document.createElement('li');
  tarefas.className = 'tarefa';
  tarefas.innerHTML = textoTarefa.value;
  listaDeTarefas.appendChild(tarefas);
  textoTarefa.value = '';
}

function classUnselectedErase() {
  for (let index = 0; index < tarefa.length; index += 1) {
    if (tarefa[index].className.indexOf('selected') > 0) {
      tarefa[index].classList.remove('selected');
    }
  }
}

function selectOption(listItem) {
  classUnselectedErase();
  const taskChosen = listItem.target;
  taskChosen.style.backgroundColor = 'rgb(128, 128, 128)';
  if (taskChosen.className.indexOf('selected' > 0)) {
    taskChosen.classList.remove('selected');
  }
  taskChosen.classList.add('selected');
}

function unselectOptions() {
  for (let index = 0; index < tarefa.length; index += 1) {
    tarefa[index].style.backgroundColor = 'white';
  }
}

function finishedOption(listItem) {
  const taskChosen = listItem;
  const taskClass = listItem.target;
  if (taskChosen.target.style.textDecoration === '') {
    taskChosen.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    taskClass.classList.remove('tarefa');
    taskClass.classList.add('completed');
  } else {
    taskChosen.target.style.textDecoration = '';
    taskClass.classList.add('tarefa');
    taskClass.classList.remove('completed');
  }
}

function clearAll() {
  for (let index = tarefa.length - 1; index >= 0; index -= 1) {
    listaDeTarefas.lastChild.remove();
    localStorage.clear();
  }
}

function clearSelected() {
  for (let index = tarefa.length - 1; index >= 0; index -= 1) {
    if ((listaDeTarefas.children[index].className.indexOf('completed')) > 0) {
      listaDeTarefas.removeChild(tarefa[index]);
      localStorage.removeItem(index);
      localStorage.removeItem(`${index} class`);
      localStorage.removeItem(`${index} style`);
    }
  }
}

function saveInformation() {
  for (let index = 0; index < tarefa.length; index += 1) {
    localStorage.setItem(index, tarefa[index].innerHTML);
    localStorage.setItem(`${index} class`, tarefa[index].className);
    localStorage.setItem(`${index} style`, listaDeTarefas.children[index].style.textDecoration);
  }
}

function moveUp() {
  let choosePosition;
  for (let indexChoose = 1; indexChoose < tarefa.length; indexChoose += 1) {
    if (tarefa[indexChoose].className.indexOf('selected') > 0) {
      choosePosition = indexChoose;
      elements([choosePosition - 1], [choosePosition]);
      break;
    }
  }
}

function moveDown() {
  let choosePosition;
  for (let indexChoose = 0; indexChoose < tarefa.length; indexChoose += 1) {
    if (tarefa[indexChoose].className.indexOf('selected') > 0) {
      choosePosition = indexChoose;
      elements([choosePosition + 1], [choosePosition]);
      break;
    }
    if (indexChoose === (tarefa.length - 2)) {
      break;
    }
  }
}

function removeSel() {
  for (let index = 0; index < tarefa.length; index += 1) {
    if ((listaDeTarefas.children[index].className.indexOf('selected')) > 0) {
      listaDeTarefas.removeChild(tarefa[index]);
      localStorage.removeItem(index);
      localStorage.removeItem(`${index} class`);
      localStorage.removeItem(`${index} style`);
    }
  }
}

removeSelected.addEventListener('click', removeSel);
buttonCriar.addEventListener('click', criarTarefa);
saveTasks.addEventListener('click', saveInformation);
clearFinished.addEventListener('click', clearSelected);
clearButton.addEventListener('click', clearAll);
listaDeTarefas.addEventListener('dblclick', finishedOption);
listaDeTarefas.addEventListener('click', unselectOptions);
listaDeTarefas.addEventListener('click', selectOption);
downPosition.addEventListener('click', moveDown);
upPosition.addEventListener('click', moveUp);
