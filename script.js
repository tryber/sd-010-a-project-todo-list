const taskList = document.getElementById('lista-tarefas');
const tasks = document.getElementsByTagName('li');
const killAllListButton = document.getElementById('apaga-tudo');
const killCompletedButton = document.getElementById('remover-finalizados');
const saveTaskListButton = document.getElementById('salvar-tarefas');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo')
const removeSelectedButton = document.getElementById('remover-selecionado')
let addTaskButton = document.getElementById('criar-tarefa');
addTaskButton.addEventListener('click', addTask);
window.onload=getList();
function addTask() {
  let listContent = document.getElementById('texto-tarefa');
  if (listContent.value == '') {
    alert('Favor, preencher a caixa de texto!');
  } else {
    let newListItem = document.createElement('li');
    newListItem.innerText = listContent.value;
    taskList.appendChild(newListItem);
    listContent.value = '';
  }
}

document.body.addEventListener('click', clickSelected);
document.body.addEventListener('dblclick', doubleClickSelected);
killAllListButton.addEventListener('click', killAll);
killCompletedButton.addEventListener('click', killCompleted);
saveTaskListButton.addEventListener('click', saveList);
moveUpButton.addEventListener('click',moveUp);
moveDownButton.addEventListener('click',moveDown);
removeSelectedButton.addEventListener('click',removeSelected);

function clickSelected(e) {
  let hasAnotherSelect = classRepeatChecker(tasks);
  for (let index = 0; index < tasks.length; index += 1) {
    if (e.target == tasks[index] && hasAnotherSelect == false) {
      tasks[index].classList.add('selected');
    } else if (e.target == tasks[index] && hasAnotherSelect == true) {
      let x = document.getElementsByClassName('selected');
      for (let ondex = 0; ondex < x.length; ondex++) {
        x[ondex].classList.remove('selected');
      }
      tasks[index].classList.add('selected');
    }
  }
}

function classRepeatChecker(array) {
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index].className.includes('selected') == true) {
      counter += 1;
    }
  }
  if (counter > 0) {
    return true;
  } else {
    return false;
  }
}

function doubleClickSelected(e) {
  for (let index = 0; index < tasks.length; index += 1) {
    if (e.target == tasks[index]) {
      if (tasks[index].className.includes('completed') != true) {
        tasks[index].classList.add('completed');
      } else {
        tasks[index].classList.remove('completed');
      }
    }
  }
}

function killAll() {
  let lastOne;
  while (taskList.children.length != 0) {
    lastOne = taskList.lastChild;
    taskList.removeChild(lastOne);
  }
  localStorage.clear("list")
}

function killCompleted() {
  let completed = document.getElementsByClassName('completed');
  if (completed[0] != 'undefined') {
    let last = completed.length - 1;
    while (last >= 0) {
      taskList.removeChild(completed[last]);
      last = completed.length - 1;
    }
  }
}

function saveList() {
  let taskSaved = [];
  if (tasks.length > 0) {
    for (let index = 0; index < tasks.length; index++) {
      let task = {
        indice: index,
        value: tasks[index].textContent,
      };
      if(tasks[index].className != ""){
        task.class=tasks[index].className
      }
      taskSaved.push(task);
    }
    localStorage.setItem('list', JSON.stringify(taskSaved));
  }
}

function getList() {
  if(localStorage.getItem("list")!=null){
    lists = JSON.parse(localStorage.getItem("list"));
    for (let index = 0; index < lists.length; index+=1) {
      let listItemRequested = document.createElement('li');
      listItemRequested.innerText = lists[index].value;
      let listsClass = lists[index].class;
      if(listsClass != undefined){
        if(listsClass.includes("completed")==true){
        listItemRequested.classList.add("completed");
        }
      }
      taskList.appendChild(listItemRequested);
    }
  }
}

function moveUp() {
  if(document.getElementsByClassName('selected')[0]!=undefined && document.getElementsByClassName('selected').length > 0){ 
      
    for (let index = 0; index < tasks.length; index++) {
        if(tasks[index].className.includes("selected")==true && tasks[index-1]!=undefined){
        let element_content = tasks[index].innerText;
        let classes = tasks[index].className;
        tasks[index].innerText=tasks[index-1].innerText;
        tasks[index-1].innerHTML=element_content;
        tasks[index-1].classList.add('selected');
        tasks[index].classList.remove('selected');
        if(classes.includes("completed")==true&&tasks[index-1].className.includes('completed')==false){
        tasks[index-1].classList.add('completed');
        tasks[index].classList.remove('completed');
        }
      }    
    }
  }  
}

function moveDown() {
  if(document.getElementsByClassName('selected')[0]!=undefined && document.getElementsByClassName('selected').length > 0){ 
    let count = 0;
    for (let index = 0; index < tasks.length; index++) {
        if(tasks[index].className.includes("selected")==true&&tasks[index+1]!=undefined && count==0){ 
          let classes = tasks[index].className;
          let f_element_content = tasks[index].innerText;
          tasks[index].innerText=tasks[index+1].innerText;
          tasks[index+1].innerHTML=f_element_content;
          tasks[index].classList.remove('selected');
          tasks[index+1].classList.add('selected'); 
          if(classes.includes("completed")==true&&tasks[index+1].className.includes('completed')==false){
            tasks[index+1].classList.add('completed');
            tasks[index].classList.remove('completed');
          }
        count+=1;
      }    
    }
  }  
}

function removeSelected() {
  let selected = document.getElementsByClassName('selected')[0];
  taskList.removeChild(selected);
}