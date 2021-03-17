function addToList() {
    const button = document.querySelector('#criar-tarefa');
    const list = document.querySelector('#lista-tarefas');
    const input = document.querySelector('#texto-tarefa');
    function saveInput() {
        const value = input.value;
        const addListItem = document.createElement('li');
        addListItem.classList.add('list');
        addListItem.appendChild(document.createTextNode(value));
        list.appendChild(addListItem);
        input.value = '';
    }
    button.onclick = function() {
        saveInput();
    };
    
}

function eventsListener() {
    const list = document.querySelector('#lista-tarefas');
    list.addEventListener('click', modifyBackground);
    // list.addEventListener('dblclick', itemCompleted);
    const resetBt = document.querySelector('#apaga-tudo');
    resetBt.addEventListener('click', resetAllList);
}

function resetAllList() {
    let itens = document.querySelectorAll('li');
    for(let index = 0; index < itens.length; index += 1){
        document.querySelector('ol').removeChild(itens[index]);
    }
}

function modifyBackground(event) {
    const backgroundRemove = document.querySelectorAll('li');
    for(let index = 0; index < backgroundRemove.length; index += 1){
        backgroundRemove[index].style.backgroundColor = 'white';
    }
    if (event.target.className === 'list') {
        const item = event.target;
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

window.onload = function controlFunctions() {
    addToList();
    eventsListener();   
}