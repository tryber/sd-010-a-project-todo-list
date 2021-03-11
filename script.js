// Checa e adiciona itens à lista de tarefas
function checkEachTask() {
  const newElement = document.createElement('li');
  const inputValue = document.getElementById('texto-tarefa');
  if (inputValue.value === '') {
    alert('Você precisa escrever algo para adicionar à lista!');
  } else {
    document.getElementById('lista-tarefas').appendChild(newElement);
    newElement.innerText = inputValue.value;
    inputValue.value = '';
  }
}

const btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', checkEachTask);

// Adiciona riscado nos itens marcados como concluídos
function checkCompleteMyListOfTasks(event) {
  if (event.target.className !== 'completed') {
    event.target.classList.add('completed');
  } else {
    event.target.classList.remove('completed');
  }
}
const myListOfTasks = document.getElementById('lista-tarefas');
myListOfTasks.addEventListener('dblclick', checkCompleteMyListOfTasks);

// Apaga todos os itens da lista
function eraseAll() {
  while (myListOfTasks.childElementCount > 0) {
    myListOfTasks.firstElementChild.remove();
  }
}

const eraseMyList = document.getElementById('apaga-tudo');
eraseMyList.addEventListener('click', eraseAll);

// Remove somente as tarefas marcadas como concluídas
/* Solução da função removeTaskDone foi compartilhada pelo colega Luciano Amâncio no Slack.
Segue link para a thread:
https://trybecourse.slack.com/archives/C01L16B9XC7/p1615426426071100 */

function removeTaskDone() {
  const removeItem = document.querySelector('#remover-finalizados');
  removeItem.addEventListener('click', () => {
    const taskCompleted = document.querySelectorAll('.completed');
    console.log('Item Removido');
    for (let index = 0; index < taskCompleted.length; index += 1) {
      if (taskCompleted[index].className === 'completed') {
        myListOfTasks.removeChild(taskCompleted[index]);
      }
    }
  });
}
removeTaskDone();

// Teste 2 de função de mudança de cor de fundo de item selecionado
function changeBgColorSelectedItem(e) {
  const bgColor = 'rgb(128, 128, 128)';
  if (e.target.style.backgroundColor !== bgColor) {
    e.target.style.backgroundColor = bgColor;
  } else {
    e.target.style.backgroundColor = 'white';
  }
}
myListOfTasks.addEventListener('click', changeBgColorSelectedItem);

// Salva as tarefas no Local Storage
/* Para a função saveMyTasks, utilizei como base a solução de  Lucas Yoshida (Trybe, turma 4):
segue link do repositório: https://github.com/tryber/sd-04-block5-project-todo-list/pull/58
 */

function saveMyTasks() {
  localStorage.myListOfTasks = myListOfTasks.innerHTML;
}
const btnSaveMyTasks = document.getElementById('salvar-tarefas');

if (typeof Storage !== 'undefined' && localStorage.myListOfTasks) {
  myListOfTasks.innerHTML = localStorage.myListOfTasks;
}

window.onload = function initialize() {
  btnSaveMyTasks.addEventListener('click', saveMyTasks);
};

/* Referências consultadas para o projeto To do list:

--> https://www.w3schools.com/howto/howto_js_todolist.asp (usei como base para a função checkEachTask)
--> DUCKETT, Jon. JavaScript & JQuery: desenvolvimento de interfaces web interativas. Rio de Janeiro: AltaBooks, 2015. (Base para entender integração de JS com HTML e CSS)
--> FLANAGAN, David. JavaScript: the defintive guide. 7 ed. Sebastopol: O'Reilly, 2020. (Base para entender eventos, DOM)
---> Agradecimento especial aos colegas Murilo Gonçalves e Lucas Pedroso, pelas sugestões e pela ajuda!! =))
Os dois me ajudaram a encontrar o erro neste código (que fazia com que uma string 'undefined' retornasse
na lista de tarefas vazia). Os colegas me ajudaram a corrigir erros nas funções checkEachTask e saveMyTasks.
*/
