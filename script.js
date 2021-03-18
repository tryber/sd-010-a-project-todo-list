//Requesito 5 e 6
let button = document.getElementById('criar-tarefa');
button.addEventListener('click', newItem);

function newItem () {
  let textTask = document.getElementById('texto-tarefa');
  let addList = document.getElementById('lista-tarefas').appendChild(document.createElement('li'));
  addList.innerHTML = textTask.value;
  textTask.value = '';

  //Requesito 7 e 8
  let listTask = document.getElementsByTagName('li');

  for (let index = 0; index < listTask.length; index += 1) {
    const listAll = listTask[index];
    listAll.addEventListener('click', paintItem);
  }

  function paintItem (e) {
    for (let index = 0; index < listTask.length; index += 1) {
      const removeClass = listTask[index];
      removeClass.classList.remove('add-background');
    }
    e.target.classList.add('add-background');
  }

  //Requesito 9
  let listCompleted = document.querySelector('#lista-tarefas');
  listCompleted.addEventListener('dblclick', lineThrough);
  
  function lineThrough(a){
    if (a.target.classList.contains('completed')) {
      a.target.classList.remove('completed');
    } else {
      a.target.classList.add('completed');
    }
  }

  //Requesito 10
  let btnReset = document.getElementById('apaga-tudo'); 
  btnReset.addEventListener('click', resit);

  function resit () {
    for (let index = 0; index < listTask.length; index += 1) {
      const element = listTask[index];
      element.remove();
    }
  }

  //Requesito 11
  let btnRemove = document.getElementById('remover-finalizados');
  btnRemove.addEventListener('click', removeFinish);

  function removeFinish () {
    for (let index = 0; index < listTask.length; index += 1) {
      const itemFinish = listTask[index];
      if (itemFinish.classList.contains('completed')) {
        itemFinish.remove();
      }
    }
  }
}
