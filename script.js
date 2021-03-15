function insertList() {
  const button = document.getElementById('criar-tarefa');
  button.addEventListener('click', () => {
    const input = document.getElementById('texto-tarefa').value;
    const list = document.createElement('li');
    if (input !== '') {
      document.getElementById('lista-tarefas').appendChild(list).innerText = input;
      document.getElementById('texto-tarefa').value = '';
    }
  });
}

insertList();
/* o codigo do requisito 7 e 8 foi escrito com base na solução de Guilherme Dornelas guilhermedornelles-todo-list-project */
function selectList() {
  const listSelect = document.getElementById('lista-tarefas');
  listSelect.addEventListener('click', (event) => {
    for (let index = 0; index < listSelect.children.length; index += 1) {
    listSelect.children[index].style.backgroundColor = '';
    }
    event.target.style.background = 'rgb(128, 128, 128)';
  });
}

selectList();

function clearList() {
  const listSelect = document.getElementById('lista-tarefas');
  document.getElementById('apaga-tudo').addEventListener('click', () => {
  listSelect.innerText='';
  });
}

clearList();