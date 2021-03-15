// Clicar no botão adiciona o item à lista
function newTask () {
    let newItem = document.createElement('li');
    let itemValue = document.getElementById('texto-tarefa').value;
    if (itemValue === '') {
        alert('Por favor, digite um valor para adicionar à sua lista.')
    }   else {
        newItem.innerText = itemValue;
        newItem.addEventListener('dblclick', function(e) {
            e.target.classList.toggle('completed')
        })
        newItem.classList.add('back');
        newItem.style.width = '200px';
        
        document.getElementById('lista-tarefas').appendChild(newItem);
        document.getElementById('texto-tarefa').value = '';
    }
    let listItem = document.querySelectorAll('.back')
    for (let index = 0; index < listItem.length; index += 1) {
        //listItem[index].addEventListener('dblclick', function(e) {
           // e.target.classList.toggle('completed')
        //})
        listItem[index].addEventListener('click', function(e) {
            getSelected = document.querySelector('.selected');
            getSelected.classList.remove('selected');
            e.target.classList.add('selected');
        })
        
      
    }
}

function removeList() {
    let fullList = document.querySelector('.back');
    fullList.parentNode.removeChild(fullList);
    //return false;
}

/*
function removeList() {
    let fullList = document.querySelectorAll('.back');
    for (index1 = 0; index1 < fullList[index1]; index1 += 1) {
    fullList[index1].parentNode.removeChild(fullList[index1]);
    return false;
    }
}
*/

let btnAddTask = document.getElementById('criar-tarefa');
btnAddTask.addEventListener('click', newTask);

// Clicar no item na lista muda sua cor de fundo
