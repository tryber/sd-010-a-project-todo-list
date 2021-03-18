const button = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas'); // Variaveis Gerais
const textoTarefa = document.getElementById('texto-tarefa');
const removeItems = document.getElementById('apaga-tudo');
const removeSelecionado = document.getElementById('remover-selecionado')

// criar botão
function click() {
  const buttonAction = document.createElement('li');
  buttonAction.innerText = textoTarefa.value;
  listaTarefas.appendChild(buttonAction);
  textoTarefa.value = '';
}
button.addEventListener('click', click);

function colorList(e){
  
  const list = document.getElementsByTagName('li');
  e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  e.target.id = 'isSelected'
  for (let index = 0; index < list.length; index += 1) {
    if (list[index] !== e.target) {
      list[index].style.backgroundColor = 'transparent';
      list[index].id = '';
    }
  }
}
listaTarefas.addEventListener('click', colorList);

listaTarefas.addEventListener('dblclick', function (e){
  if (e.target.className !== 'completed') {
    e.target.className = 'completed'
  } else {
    e.target.className = '';
  }
});
removeItems.addEventListener('click', apagar);

function apagar () {
  const list = document.getElementsByTagName('li')
  for (let index = 0; index < list.length; index += 0){
    list[index].remove();
  }
};

const removeFinalizados = document.getElementById('remover-finalizados')

removeFinalizados.addEventListener('click', function() {
  const completed = document.querySelectorAll('.completed')
  for (let index = 0; index < completed.length; index  += 1) {
    completed[index].remove()
  }
});

removeSelecionado.addEventListener('click', function() {
  const test = document.getElementById('isSelected') // exercicio 14
  test.remove()
});
