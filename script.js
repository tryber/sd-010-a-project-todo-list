const list = document.querySelector('#lista-tarefas');
const btnDelete = document.querySelector('#apaga-tudo');
const btnDeleteCompleted = document.querySelector('#remover-finalizados');

function addList() {
  const btnForAdd = document.querySelector('#criar-tarefa');
  btnForAdd.addEventListener('click', () => {
    const leList = document.querySelector('#texto-tarefa');
    const li = document.createElement('li');
    li.innerHTML = leList.value;
    list.appendChild(li);
    document.getElementById('texto-tarefa').value = '';
  });
}
addList();

function getGray() {
  list.addEventListener('click', (event) => {
    for (let index = 0; index < list.children.length; index += 1) {
      list.children[index].style.backgroundColor = '';
    }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
getGray();

function completaTarefa() {
  list.addEventListener('dblclick', (event) => {
    const eventItem = event.target;
    if (eventItem.classList.contains('completed')) {
      eventItem.classList.remove('completed');
    } else {
      eventItem.classList.add('completed');
    }
  });
}
completaTarefa();

function deleteAll() {
  btnDelete.addEventListener('click', () => {
    list.innerHTML = '';
  });
}
deleteAll();

function deleteAllCOmpleted() {
  const completas = document.querySelectorAll('.completed');
  btnDeleteCompleted.addEventListener('click', () => {
    for (let index = 0; index < completas.length; index += 1) {
        list.removeChild(completas[index]);
    }
  });
}
deleteAllCOmpleted();

/* agradeço a Pollyana Oliveira por me ajudar a sanar o requisito 8 */
/* agradeço a Anderson Silva, consegui progregir atraves dos códigos dele */
