let botao = document.querySelector('#criar-tarefa');

function tasks(recebeTarefa) {
    let varPai = document.querySelector('#lista-tarefas')
    let varSon = document.createElement('li');
    varSon.innerText = recebeTarefa;
    varPai.appendChild(varSon);
}

botao.addEventListener('click', () => {
    let recebeTarefa = document.querySelector('#texto-tarefa').value;
    tasks(recebeTarefa);
    document.querySelector('#texto-tarefa').value = '';
});

////////////////////////////////////////////////////////////////////////////

function setClass(item) {
    if (document.querySelector(".mystyle")) {
        let itemRemove = document.querySelector(".mystyle");
        itemRemove.classList.remove("mystyle");
        itemRemove.style.backgroundColor = '';

        item.classList.add("mystyle");
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    } else {
        item.classList.add("mystyle");
        item.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}

const taskList = document.getElementById('lista-tarefas');
taskList.addEventListener('click', () => {
    let clickedItem = event.target;
    setClass(clickedItem);
});

const taskList2 = document.getElementById('lista-tarefas');
taskList2.addEventListener('dblclick', () => {
    let itemDblclick = event.target;
    if (itemDblclick.style.textDecoration == 'line-through solid rgb(0, 0, 0)') {
        itemDblclick.style.textDecoration = 'none';
        itemDblclick.classList.remove('completed');
    } else {
        itemDblclick.classList.add('completed');
        itemDblclick.style.textDecoration = 'line-through solid rgb(0, 0, 0)';

    }
});

////////////////////////////////////////////////////////////////////////

let clear = document.querySelector('#apaga-tudo');
let myList = document.querySelector('#lista-tarefas');

function clearList(parametro) {
    if (parametro !== '') {
        myList.innerHTML = '';
    }
    else {
        alert('A lista esta vazia!');
    }
}
clear.addEventListener('click', () => {
    clearList(myList.innerHTML);
});

////////////////////////////////////////////////////////////////////////

let clearItem = document.querySelector('#remover-finalizados');
let myList2 = document.querySelector('#lista-tarefas');

function removeItem(fullList) {

    let theList = document.getElementsByTagName('li');

    if (theList.length == 0) {
        alert('Nenhum item marcado como finalizado!');
    }
    if (document.getElementsByTagName('li')) {
        while (document.querySelector('.completed')) {
            document.querySelector('.completed').remove();
        }
    }

}
clearItem.addEventListener('click', () => {
    removeItem(myList2);
});
