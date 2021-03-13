// Variavél Global;
const listPai = document.querySelector('#lista-tarefas');

// Requisito 5 e 6;
function clickButton() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.querySelector('#texto-tarefa');
    let list;
    if (input.value === '') {
      list = '';
    } else {
      list = document.createElement('li');
      listPai.appendChild(list).innerText = input.value;
      input.value = '';
    }
  });
}
clickButton();
// Requisito  7;
function clickItemList() {
  listPai.addEventListener('click', () => {
    const list = document.querySelectorAll('li');
    for (let index = 0; index < list.length; index += 1) {
      const color = 'rgb(128, 128, 128)';
      list[index].style.backgroundColor = color;
    }
  });
}
clickItemList();

// Requisito 8;
function nextItemList() {
  listPai.addEventListener('click', (e) => {
    const color = e.target;
    const li = document.querySelectorAll('li');
    for (let index = 0; index < li.length; index += 1) {
      li[index].style.backgroundColor = document.body.style.backgroundColor;
      if (color.localName === 'li') {
        color.style.backgroundColor = 'rgb(128, 128, 128)';
      }
    }
  });
}
nextItemList();

// Requisito 9 ;
function doubleClick() {
  listPai.addEventListener('dblclick', (e) => {
    const target1 = e.target;
    if (target1.classList.contains('completed')) {
      target1.classList.remove('completed');
      target1.style.textDecoration = '';
    } else {
      target1.classList.add('completed');
      target1.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  });
}
doubleClick();

// Requisito 10;
function clear() {
  const list = document.querySelectorAll('#lista-tarefas')[0];
  const button = document.querySelector('#apaga-tudo');
  button.addEventListener('click', () => {
    list.innerText = '';
  });
}
clear();

// Requisito 11;
function removeFinished() {
  const button = document.getElementById('remover-finalizados');
  button.addEventListener('click', () => {
    const listClass = document.querySelectorAll('.completed');
    for (let index = 0; index < listClass.length; index += 1) {
      listPai.removeChild(listClass[index]);
    }
  });
}
removeFinished();
// Requisito 12;

function saveitens() {
  const button = document.querySelector('#salvar-tarefas');
  button.addEventListener('click', () => {
    localStorage.setItem('lista', listPai.innerHTML);
  });
}
saveitens();

function gravaItens() {
  const getItem = localStorage.getItem('lista');
  if (getItem === null) {
    console.log('Você não salvou nada amigo!');
  } else {
    listPai.innerHTML = getItem;
  }
}

gravaItens();
