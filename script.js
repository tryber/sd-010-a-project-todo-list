// recupera os botões e a caixa de texto
const buttonAdd = document.querySelector('#criar-tarefa');
const buttonClean = document.querySelector('#apaga-tudo');
const boxText = document.querySelector('#texto-tarefa');

// muda a cor de fundo da tarefa ao ser clicada
function changeColor(e) {
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log(e.target);
}

// retira a cor cinza
function resetColor() {
  const itens = document.getElementsByClassName('itemList');
  for (let x = 0; x < itens.length; x += 1) {
    itens[x].style.backgroundColor = 'white';
  }
}
/*   const currentItem = document.getElementsByClassName('itemList');
  for (let index = 0; index < currentItem.length; index += 1) {
    if (currentItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
      currentItem[index].style.backgroundColor = 'white';
    }
  }
} */

// risca tarefas concluídas
function completedTask(e) {
  if (e.target.className === 'itemList completed') {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

// adiciona nova tarefa
function criaTarefa() {
  const item = document.createElement('li');
  item.className = 'itemList';
  item.innerText = boxText.value;
  document.querySelector('#lista-tarefas').appendChild(item);
  boxText.value = '';
  item.addEventListener('click', resetColor);
  item.addEventListener('click', changeColor);
  item.addEventListener('dblclick', completedTask);
}

buttonAdd.addEventListener('click', criaTarefa);

// limpa a lista toda
function cleanList() {
  const itens = document.getElementsByClassName('itemList');
  const sizeList = itens.length;
  for (let indexClean = 0; indexClean < sizeList; indexClean += 1) {
    document.getElementById('lista-tarefas').firstElementChild.remove();
  }
}

buttonClean.addEventListener('click', cleanList);
