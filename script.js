/* informações referentes ao input e ao button foram retiradas do
https://www.w3schools.com/html/html_form_input_types.asp
https://www.w3schools.com/jsref/dom_obj_pushbutton.asp */
// vamos criar o button do requesito 5
const myButton = document.createElement('button');
myButton.innerText = 'adicionar';
myButton.type = 'reset';
myButton.id = 'criar-tarefa';
document.getElementsByTagName('form')[0].appendChild(myButton);
// mudando o backgroundColor dos li
/* paro o requsito 8, houve a necessidade de mudar todos o back para white
e assim colorir o targey para grey */
// ta aqui por causa do chato do lint
const listItens = document.getElementById('lista-tarefas').children;
function allToWhite() {
  for (let i = 0; i < listItens.length; i += 1) {
    listItens[i].style.backgroundColor = 'white';
  }
}
function changeToGrey(selectedItem) {
  const toGrey = selectedItem.target;
  allToWhite();
  toGrey.style.backgroundColor = 'rgb(128, 128, 128)';
}
// requesito 9
/* utilização da propriedade contains ( vista na documentação) do classList
1 - add ou remover a class completed dos elementos
2 - add o line-through nos que estão contidos na class completed
*/
function taskDone() {
  const theTask = document.getElementsByClassName('completed');
  for (let i = 0; i < listItens.length; i += 1) {
    listItens[i].style.textDecoration = 'none';
  }
  for (let i = 0; i < theTask.length; i += 1) {
    theTask[i].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
  }
}
function completedTask(task) {
  const doneTask = task.target;
  if (doneTask.classList.contains('completed')) {
    doneTask.classList.remove('completed');
  } else {
    doneTask.classList.add('completed');
  }
  taskDone();
}
// após criação do myButton e atribuir input ao ol
/* utilização da propriedade value do input
fonte : https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/text */
function receiveTask() {
  const taskToDo = document.createElement('li');
  taskToDo.innerText = document.getElementById('texto-tarefa').value;
  document.getElementById('lista-tarefas').appendChild(taskToDo);
  taskToDo.addEventListener('click', changeToGrey);
  taskToDo.addEventListener('dblclick', completedTask);
}
myButton.addEventListener('click', receiveTask);

// apaga tudo requi 10

function cleanAll() {
  for (let i = 0; i < listItens.length; i += 0) {
    document.getElementById('lista-tarefas').removeChild(listItens[i]);
  }
}
const cleanButton = document.createElement('button');
cleanButton.innerText = 'apagar tudo';
cleanButton.id = 'apaga-tudo';
cleanButton.addEventListener('click', cleanAll);
document.getElementsByTagName('body')[0].appendChild(cleanButton);

// remover finalizados requi 11
const completedIntens = document.getElementsByClassName('completed');
function cleanCompleted() {
  for (let i = 0; i < completedIntens.length; i += 0) {
    document.getElementById('lista-tarefas').removeChild(completedIntens[i]);
  }
}
const cleanCompletedButton = document.createElement('button');
cleanCompletedButton.innerText = 'apagar os feitos';
cleanCompletedButton.id = 'remover-finalizados';
cleanCompletedButton.addEventListener('click', cleanCompleted);
document.getElementsByTagName('body')[0].appendChild(cleanCompletedButton);
