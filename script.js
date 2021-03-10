const textTask = document.createElement('INPUT');
textTask.id = 'texto-tarefa';
const taskContainer = document.querySelector('.taskContainer');
taskContainer.appendChild(textTask);
const listContainer = document.querySelector('.listContainer');
const list = document.createElement('ol');
list.id = 'lista-tarefas';
listContainer.appendChild(list);

const buttonTask = document.createElement('button');
buttonTask.id = 'criar-tarefa';
taskContainer.appendChild(buttonTask);
buttonTask.innerText = 'Adicionar';
function addTask() {
  const listItem = document.createElement('li');
  listItem.innerText = textTask.value;
  list.appendChild(listItem);
  textTask.value = '';
}
buttonTask.addEventListener('click', addTask);
list.addEventListener('click', function(event) {
    let listItens = document.querySelectorAll('li');
    for (let item of listItens) {
        if (item.style.backgroundColor = 'rgb(128, 128, 128)') {
            item.style.backgroundColor = 'white';
            item.classList.remove('selected')
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            event.target.classList.add('selected')
        }
        else {
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            event.target.classList.add('selected')
    }
    }
});
list.addEventListener('dblclick', function(event) {
   if (event.target.classList.contains('completed')) {
       event.target.classList.remove('completed');
       event.target.style.textDecoration = '';
   }
   else {
    event.target.classList.add('completed');
    event.target.style.textDecoration = 'line-through'
    }
});
const eraseButton = document.createElement('button');
document.querySelector('.buttonsContainer').appendChild(eraseButton);
eraseButton.innerText = 'Apagar tudo';
eraseButton.id = 'apaga-tudo';
function eraseAll() {
    let itensList = document.querySelectorAll('li');
    for (let item of itensList) {
        list.removeChild(item)
    }
}
eraseButton.addEventListener('click', eraseAll);

const eraseComplete = document.createElement('button');
document.querySelector('.buttonsContainer').appendChild(eraseComplete);
eraseComplete.innerText = 'Apagar tarefas riscadas';
eraseComplete.id = 'remover-finalizados';
function eraseCompleted() {
    let itensList = document.querySelectorAll('.completed');
    for (let item of itensList) {
        list.removeChild(item);
        }
}
eraseComplete.addEventListener('click', eraseCompleted);

const saveButton = document.createElement('button');
document.querySelector('.buttonsContainer').appendChild(saveButton);
saveButton.id = 'salvar-tarefas';
saveButton.innerText = 'Salvar';
saveButton.addEventListener('click', function() {
    localStorage.setItem('listItens', list.innerHTML)
})

/* o pedaço de codigo referente ao botão saveButton foi referenciado por
https://medium.com/wesionary-team/creating-favorites-list-using-localstorage-in-react-part-i-22692bc0f153 */ 

let saved = localStorage.getItem('listItens');
if (saved) {
    list.innerHTML = localStorage.getItem('listItens');
};
const eraseSelected = document.createElement('button');
eraseSelected.id = 'remover-selecionado';
document.querySelector('.buttonsContainer').appendChild(eraseSelected);
eraseSelected.innerText = 'Apagar selecionado';
eraseSelected.addEventListener('click', function() {
    let selectedItem = document.querySelector('.selected');
    list.removeChild(selectedItem);
})