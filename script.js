const list = document.querySelector('#lista-tarefas');

/* -------- button add --------- */
const addButton = document.querySelector('#criar-tarefa');

function addTextToList() {
    const writedText = document.querySelector('#texto-tarefa').value;
    const createLi = document.createElement('li');
    createLi.innerHTML = writedText;
    list.appendChild(createLi);
    document.querySelector('#texto-tarefa').value = '';
}

addButton.addEventListener('click', addTextToList);

/* ------- actived Li -------- */
function paintBackground(e) {
    if (document.querySelector('.active') !== null) {
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
    } else {
        e.target.classList.add('active');
    }
}

list.addEventListener('click', paintBackground);

/* ------- completed line-through -------- */
function turnCompleted(e) {
    e.target.classList.toggle('completed');
}

list.addEventListener('dblclick', turnCompleted);

/* -------- button erase all --------- */
const eraseButton = document.querySelector('#apaga-tudo');

function eraseAll() {
    const liList = document.querySelectorAll('#lista-tarefas li');
    for (let liIndex = 0; liIndex < liList.length; liIndex += 1) {
        liList[liIndex].remove();
    }
}

eraseButton.addEventListener('click', eraseAll);

/* -------- button clean completeds --------- */
const cleanCompletedButton = document.querySelector('#remover-finalizados');

function cleanCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    for (let taskIndex = 0; taskIndex < completedTasks.length; taskIndex += 1) {
        completedTasks[taskIndex].remove();
    }
}

cleanCompletedButton.addEventListener('click', cleanCompleted);
