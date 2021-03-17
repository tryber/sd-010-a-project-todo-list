const btn = document.querySelector('#criar-tarefa');
const conteudo = document.querySelector('#texto-tarefa');
const lista = document.querySelector('#lista-tarefas');
function create() {

    const item = document.createElement('li');
    item.innerHTML = conteudo.value;
    lista.appendChild(item);
    conteudo.value = "";

}
btn.addEventListener('click', create);


function reset() {
    const array = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < array.length; index++) {
        array[index].style.backgroundColor = "";   
           
    }
}

function marcar(event) {
    const array = document.querySelectorAll('#lista-tarefas');
    reset(); 
    for (let index = 0; index < array.length; index++) {
        event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    }
}
lista.addEventListener('click', marcar);

function riscar(event){
    const array = document.querySelectorAll('#lista-tarefas');
    let classe = event.target.className ;

    
   for (let index = 0; index < array.length; index++) {
        const element = array[index]; 
        if (classe == ''){
            event.target.classList.add('completed');
        }
        if (classe == 'completed'){
            event.target.classList.remove('completed');
        }
    }
}
lista.addEventListener('dblclick', riscar);

