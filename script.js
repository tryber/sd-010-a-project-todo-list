const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const elementsList = document.querySelector('.elementList');


function clean() {
    const classColor = document.querySelectorAll('.color');
    for (let i = 0; i < classColor.length; i += 1) {
        classColor[i].classList.remove('color');
    }
}

function main() {
    button.addEventListener('click', () => {
        let liItem = document.createElement('li');
        liItem.innerText = input.value;

        liItem.addEventListener('click', () => {
            clean();
            liItem.classList.add('color');
        });

        liItem.addEventListener('dblclick', () => {
            liItem.classList.toggle('completed')
        });

        list.appendChild(liItem);
        input.value = '';
    });
}
main();

let clear = document.getElementById('apaga-tudo');
clear.addEventListener('click', () => {
    const clearList = document.querySelectorAll('li')
    for (let i = 0; i < clearList.length; i += 1) {
        list.removeChild(clearList[i])
    }

});

let finishTasks = document.querySelector('#remover-finalizados')
finishTasks.addEventListener('click', () => {
    const finalized = document.querySelectorAll('.completed')
    for (let i = 0; i < finalized.length; i += 1) {
        finalized[i].remove()
    }
});





