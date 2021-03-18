// Optei por deixar a explicação de cada codigo pra prestar bastante atenção e marcar pra aprender
// Inserindo o botão em uma variável
const buutoom = document.getElementById('criar-tarefa');
// Adicionando o eventListener ao botão
buutoom.addEventListener('click', addTask);
// adicona a uma variavel toda ol
const listeningToOl = document.getElementById('lista-tarefas');

function addTask() {
  // Cria variavel que cria nova linha
  const newTask = document.createElement('li');
  // captura o conteudo do imput
  const inputContent = document.getElementById('texto-tarefa').value;
  // adiciona a nova linha o conteudo do imput
  newTask.textContent = inputContent;
  newTask.classList.add('task');
  // adiciona a ol a nova linha
  document.querySelector('#lista-tarefas').appendChild(newTask);
  // limpa o imput
  document.getElementById('texto-tarefa').value = '';
}

function selectedTask() {
  // adiciona ouvidor a toda ol
  listeningToOl.addEventListener('click', function (e) {
    // adiciona a variavel os elementos li
    const liGroup = document.getElementsByTagName('li');
    // for que vai rodar os li
    for (let index = 0; index < liGroup.length; index += 1) {
      // passar por cada li e remove a classe selecionada
      liGroup[index].classList.remove('selected');
    }
    // adiciona a variavel a origem do evento
    const getClassSelected = e.target;
    // adiciona a origem do evento a classe "selected"
    getClassSelected.classList.add('selected');
  });
}
selectedTask();

function completedTask() {
  const allLi = document.querySelector('#lista-tarefas');
  allLi.addEventListener('dblclick', (e) => {
    const getClassCompleted = e.target;
    if (getClassCompleted.classList.contains('completed')) {
      getClassCompleted.classList.remove('completed');
    } else {
      getClassCompleted.classList.add('completed');
    }
  });
}
completedTask();

const removeList = document.querySelector('#apaga-tudo');
removeList.addEventListener('click', apagarTudo);

function apagarTudo() {
  const removeTask = document.querySelectorAll('.task');
  for (let index = 0; index < removeTask.length; index += 1) {
    removeTask[index].remove();
  }
}
// Agradecimentos a Nathi Zebral que tentou ajudar a resolver o problema
// Agracimentos ao Anderson Nascimento que junto comigo resolveu o problema, descrito ao final do codigo.
function removeTaskCompleted() {
  const rmCompletedTask = document.querySelectorAll('.completed');
  for (let index = 0; index < rmCompletedTask.length; index += 1) {
    listeningToOl.removeChild(rmCompletedTask[index]);
  }
}
const removeCompleted = document.querySelector('#remover-finalizados');
removeCompleted.addEventListener('click', removeTaskCompleted);
