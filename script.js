/* No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input. */
const olElment = document.querySelector('#lista-tarefas');
function creatTasks() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', () => {
    const inputElement = document.querySelector('#texto-tarefa');
    const getText = inputElement.value;
    const liElment = document.createElement('li');
    liElment.innerHTML = getText;
    olElment.appendChild(liElment);
    inputElement.value = '';
  });
}
creatTasks();
/* 7 - Clicar em um item da lista deve alterar a cor de fundo do item para cinza rgb(128,128,128) */
function createBgColor() {
  olElment.addEventListener('click', (e) => {
    const elList = document.querySelector('.bg');
    if (elList !== null) elList.classList.remove('bg');
    const elementClicked = e;
    elementClicked.target.classList.add('bg');
  });
}
createBgColor();
/* 9 - Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item Pontos importantes sobre este requisito:

* Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

* Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
 */
function checkedItem() {
  const olList = document.querySelector('#lista-tarefas');
  olList.addEventListener('dblclick', (e) => {
    const elSelected = e;
    elSelected.target.classList.toggle('completed');
  });
}

checkedItem();
/* 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista */
function clearList() {
  const clearAllList = document.querySelector('#apaga-tudo');
  clearAllList.addEventListener('click', () => {
    const itensList = document.querySelector('#lista-tarefas');
    itensList.innerHTML = '';
  });
}
clearList();
