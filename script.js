let ol = document.getElementById('lista-tarefas');
let li = document.querySelectorAll('.itens');

function changeColor(itens) {
  const colorize = document.getElementsByClassName('itens');
  const select = itens.target;
  for (let index = 0; index < colorize.length; index += 1) {
    if (colorize[index] === select) {
      colorize[index].classList.add('selected');
      colorize[index].style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
      colorize[index].classList.remove('selected');
      colorize[index].removeAttribute('style');
    }
  }
}

function lineTrhough(itens) {
  if (itens.target.classList.contains('completed')) {
    itens.target.classList.toggle('completed');
  } else {
    itens.target.classList.toggle('completed');
  }
}

function resetInput() {
  const item = document.createElement('li');
  item.className = 'itens';
  item.innerText = document.getElementById('texto-tarefa').value;
  ol.appendChild(item);
  if (item !== '') {
    document.getElementById('texto-tarefa').value = '';
  }
  ol.addEventListener('dblclick', lineTrhough);
  ol.addEventListener('click', changeColor);
}

function cleanList() {
  ol.innerHTML = '';
}

function removeFinished() {
  li = document.querySelectorAll('.itens');
  ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('completed')) {
      ol.removeChild(li[index]);
    }
  }
}

// saveAll e getAll com funcionalidades sugeridas por Lucas Pedroso - Turma 10 - Tribo A
function saveAll() { localStorage.setItem('task', ol.innerHTML); }

function getAll() {
  ol.innerHTML = localStorage.getItem('task');
  ol.addEventListener('dblclick', lineTrhough);
  ol.addEventListener('click', changeColor);
}

// moveUp e moveDown com funcionalidades sugeridas por Wanderson Sales - Turma 10 - Tribo A
function moveUp() {
  li = document.getElementsByClassName('itens');
  console.log(li);
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected') && (li[index] !== ol.firstElementChild)) {
      console.log(li[index]);
      ol.insertBefore(li[index], li[index].previousElementSibling);
      break;
    }
  }
}

function moveDown() {
  li = document.getElementsByClassName('itens');
  console.log(li);
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected') && (li[index] !== ol.lastElementChild)) {
      console.log(li[index]);
      ol.insertBefore(li[index], li[index].nextElementSibling.nextElementSibling);
      break;
    }
  }
}

function removeSelected() {
  li = document.getElementsByClassName('itens');
  ol = document.querySelector('#lista-tarefas');
  for (let index = 0; index < li.length; index += 1) {
    if (li[index].classList.contains('selected')) {
      ol.removeChild(li[index]);
    }
  }
}

const sendBtn = document.querySelector('#criar-tarefa');
sendBtn.addEventListener('click', resetInput);

const cleanButton = document.querySelector('#apaga-tudo');
cleanButton.addEventListener('click', cleanList);

const removeFinishedBtn = document.querySelector('#remover-finalizados');
removeFinishedBtn.addEventListener('click', removeFinished);

const saveAllBtn = document.querySelector('#salvar-tarefas');
saveAllBtn.addEventListener('click', saveAll);

const upBtn = document.querySelector('#mover-cima');
upBtn.addEventListener('click', moveUp);

const downBtn = document.querySelector('#mover-baixo');
downBtn.addEventListener('click', moveDown);

const removeSelectedBtn = document.querySelector('#remover-selecionado');
removeSelectedBtn.addEventListener('click', removeSelected);

window.onload = () => {
  getAll();
};
