const listaDeTarefas = document.querySelector('#lista-tarefas');

function inputTarefa() {
  const botaoInputTarefa = document.querySelector('#criar-tarefa');
  botaoInputTarefa.addEventListener('click', () => {
    const criaLi = document.createElement('li');
    const textoLi = document.getElementById('texto-tarefa').value;
    criaLi.innerHTML = textoLi;
    listaDeTarefas.appendChild(criaLi);
    document.getElementById('texto-tarefa').value = '';
  });
}
inputTarefa();

function selecionaTarefa() {
  listaDeTarefas.addEventListener('click', (element) => {
    const selecionado = document.querySelector('#selecionado');
    if (selecionado !== null) {
      document.querySelector('#selecionado').style.backgroundColor = 'white';
      document.querySelector('#selecionado').id = '';
    } else {
      element.target.id = 'selecionado';
      document.querySelector('#selecionado').style.backgroundColor = 'rgb(128, 128, 128)';
    }
  });
}
selecionaTarefa();

function completaTarefa() {
  listaDeTarefas.addEventListener('dblclick', (element) => {
    if (element.target.className === 'completed') {
      element.target.className = '';
    } else {
      element.target.className = 'completed';
    }
  });
}
completaTarefa();

function apagaTudo() {
  const botaoApagaTarefa = document.querySelector('#apaga-tudo');
  botaoApagaTarefa.addEventListener('click', () => {
    listaDeTarefas.innerHTML = '';
  });
}
apagaTudo();

function apagaCompleto() {
  const botaoApagaTarefa = document.querySelector('#remover-finalizados');
  botaoApagaTarefa.addEventListener('click', () => {
    const lista = document.querySelectorAll('#lista-tarefas li');
    for (let index = 0; index < lista.length; index += 1) {
      if (lista[index].className === 'completed') {
        listaDeTarefas.removeChild(lista[index]);
      }
    }
  });
}
apagaCompleto();
