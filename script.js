// Ajuda do Andy e Aníbal. Vou estudar javascript para ficar tudo muito bem claro. CSS e HTML para mim está tudo ótimo. Vou correr atrás do prejuízo no javascript.

function adicionaTarefa() {
    const botao = document.getElementById('criar-tarefa');
    botao.addEventListener('click', (e) => {
        const taskList = document.getElementById('lista-tarefas');
        const entrada = document.getElementById('texto-tarefa');
        if (entrada.value !== '') {
            const listaCriada = document.createElement('li');
            taskList.appendChild(listaCriada);
            listaCriada.innerHTML = entrada.value;
            entrada.value = '';
        }
    });
  
}
  
adicionaTarefa();


function itemSelecionado() {
    const lista = document.getElementsByTagName('ol')[0];
    const item = document.getElementsByTagName('li');
    lista.addEventListener('click', (e) => {
        const targetEvent = e.target;
        for (let index = 0; index < item.length; index += 1) {
            item[index].style.backgroundColor = document.body.style.backgroundColor;
            if (targetEvent.localName === 'li') {
                targetEvent.style.backgroundColor = 'rgb(128, 128, 128)';
            }
        }
    });
}
  
itemSelecionado();
  
    
function checkItem() {
    const list = document.getElementsByTagName('ol')[0];
    list.addEventListener('dblclick', (e) => {
        const targetEvent = e.target;
        if (targetEvent.classList.contains('completed')) {
            targetEvent.classList.remove('completed');
        } else {
            targetEvent.classList.add('completed');
        }
    });
}
  
checkItem();