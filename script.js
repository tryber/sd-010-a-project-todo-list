function getInputHtml() {
  const getOl = document.querySelector('#lista-tarefas');
  const getInput = document.querySelector('#texto-tarefa');
  const getButton = document.querySelector('#criar-tarefa');
  function add() {
    const valueLi = getInput.value;
    const createLi = document.createElement('li');
    createLi.classList.add('list');
    if (valueLi === '') {
      alert('Informe a tarefa que deseja adicionar');
    } else {
      createLi.appendChild(document.createTextNode(valueLi));
      getOl.appendChild(createLi);
      getInput.value = '';
    }
  }
  getButton.onclick = function click() {
    add();
  };
}
// Requisito 7
// 7. Clicar em um item da lista de alterar o bgColor para rgb(128, 128, 128)
function changeBackgroundColor(event) {
  // Requisito 8
  // não pode ser possivel selecionar mais de um elemento da list
  const removeBgColor = document.querySelectorAll('li');
  for (let index = 0; index < removeBgColor.length; index += 1) {
    removeBgColor[index].style.backgroundColor = 'white';
  }
  if (event.target.className === 'list') {
    const selectedLi = event.target;
    selectedLi.style.backgroundColor = 'rgb(128, 128, 128)';
  }
}
// Requisito 9
// 9. clicar 2x faz com que seja riscado, indicar que foi conpleto
function changeTextDecoration() {
  console.log('test');
  // for (let index = 0; index < listItem.length; index += 1) {
  //   listItem[index].classList.add('completed');
  // }
}
// deve ser possivel defazer clicando novamente 2x no item
// Requisito 10
function removeListItem() {
  const elementOl = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    elementOl.removeChild(listItem[index]);
  }
}
// Requisito 11
function removeItemCompleted() {
  const elementOl = document.querySelector('ol');
  const listItem = document.querySelectorAll('li');
  for (let index = 0; index < listItem.length; index += 1) {
    const itemCompleted = listItem[index].className === 'list completed';
    elementOl.removeChild(itemCompleted);
  }
}

function managerEvents() {
  // Gerencia os eventos
  // 7. Recuperar o pai dos meus itens de lista
  const taskList = document.querySelector('#lista-tarefas');
  taskList.addEventListener('click', changeBackgroundColor);
  // 9. clicar 2x faz com que seja riscado, indicar que foi conpleto
  taskList.addEventListener('dblclick', changeTextDecoration);
  // 10. ao clicar no botão com id apaga-tudo, apagar todos os itens da lista
  const buttonApagaTudo = document.querySelector('#apaga-tudo');
  buttonApagaTudo.addEventListener('click', removeListItem);
  // 11. ao clicar no botãp com id remover-finalizados, apagar todos os itens concluidos
  const buttonRemoveFinalizados = document.querySelector('#remover-finalizados');
  buttonRemoveFinalizados.addEventListener('click', removeItemCompleted);
}
window.onload = function start() {
// Chama as funções
  getInputHtml();
  managerEvents();
};
