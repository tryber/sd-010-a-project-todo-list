let input = document.querySelector('#texto-tarefa');
let totalList = document.querySelector('#lista-tarefas');
let buttonNewLi = document.getElementById('criar-tarefa');
let buttonClear = document.getElementById('apaga-tudo');
let buttonClearComplete = document.getElementById('remover-finalizados');


function createLi() {
    if (input.value !== '') {
        let newLi = document.createElement('li');
        newLi.innerHTML = input.value;
        totalList.appendChild(newLi);
        input.value = ''
    }
}

function colorChange(e) {
    let listItens = document.querySelectorAll('li');
    for (let index = 0; index < listItens.length; index += 1) {
        listItens[index].style.backgroundColor = 'white';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function completeTask(e) {
    if (e.target.classList.contains('completed') === true) {
        e.target.classList.remove('completed');
    } else {
        e.target.classList.add('completed');
    }
}

function totalClear() {
    while (totalList.firstChild) {
        totalList.firstChild.remove();
    }
}

function clearComplete() {
    let completeItens = document.getElementsByClassName('completed');
    while (completeItens.length > 0) {
        completeItens[0].remove();
    }
}

window.onload = function init() {
    buttonNewLi.addEventListener('click', createLi);
    buttonClear.addEventListener('click', totalClear);
    buttonClearComplete.addEventListener('click', clearComplete);
    totalList.addEventListener('click', colorChange);
    totalList.addEventListener('dblclick', completeTask);
}