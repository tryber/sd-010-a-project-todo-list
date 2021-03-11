const listaTarefas = document.querySelector('#lista-tarefas');
const adicionarTarefaButton = document.querySelector('#criar-tarefa');
const adicionarTarefaInput = document.querySelector('#texto-tarefa');
const apagaTudoButton = document.querySelector('#apaga-tudo');
const removeFinalizadosButton = document.querySelector('#remover-finalizados');
const salvarTarefasButton = document.querySelector('#salvar-tarefas');
const moverCimaButton = document.querySelector('#mover-cima');
const moverBaixoButton = document.querySelector('#mover-baixo');
const removerSelecionadoButton = document.querySelector('#remover-selecionado');

function selecionarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  document.querySelectorAll('ol li').forEach((el) => el.classList.remove('selected'));
  tarefaClicada.classList.add('selected');
}

function completarTarefa(tarefaElementoHtml) {
  const tarefaClicada = tarefaElementoHtml;
  tarefaClicada.classList.toggle('completed');
}

function criarElementoHtmlTarefa(nomeDaTarefa, classeDaTarefa) {
  const tarefaEl = document.createElement('li');
  tarefaEl.className = classeDaTarefa || 'tarefa';
  tarefaEl.innerHTML = nomeDaTarefa;
  tarefaEl.addEventListener('click', (e) => selecionarTarefa(e.target));
  tarefaEl.addEventListener('dblclick', (e) => completarTarefa(e.target));
  return tarefaEl;
}

function adicionaTarefa() {
  const tarefaParaAdicionar = adicionarTarefaInput.value;
  const tarefa = criarElementoHtmlTarefa(tarefaParaAdicionar);
  listaTarefas.appendChild(tarefa);
  adicionarTarefaInput.value = '';
}

function removerTodasTarefas() {
  document.querySelectorAll('ol li').forEach((el) => el.remove());
}

function removerTarefasFinalizadas() {
  document.querySelectorAll('.completed').forEach((el) => el.remove());
}

function salvarTarefas() {
  const tarefas = [];
  document.querySelectorAll('ol li').forEach((el) => {
    tarefas.push({
      className: el.className,
      text: el.innerHTML,
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tarefas));
}

function carregarTarefas() {
  const tarefasSalvas = JSON.parse(localStorage.getItem('tasks')) || [];
  const tarefasEl = [];
  tarefasSalvas.forEach((el) => tarefasEl.push(criarElementoHtmlTarefa(el.text, el.className)));
  tarefasEl.forEach((el) => listaTarefas.appendChild(el));
}

carregarTarefas();

function moverTarefaParaCima() {
  const itemSelecionado = document.querySelector('.selected');
  const itensDaLista = document.querySelectorAll('ol li');
  const listaTamanho = document.querySelectorAll('ol li').length;

  for (let index = 0; index < listaTamanho; index += 1) {
    if (itensDaLista[index].classList.contains('selected') && index !== 0) {
      listaTarefas.insertBefore(itemSelecionado, itensDaLista[index - 1]);
    }
  }
}

function moverTarefaParaBaixo() {
  const itemSelecionado = document.querySelector('.selected');
  const itensDaLista = document.querySelectorAll('ol li');
  const listaTamanho = document.querySelectorAll('ol li').length;

  for (let index = 0; index < listaTamanho; index += 1) {
    if (itensDaLista[index].classList.contains('selected') && index !== listaTamanho - 1) {
      listaTarefas.insertBefore(itensDaLista[index + 1], itemSelecionado);
    }
  }
}

function removerSelecionado() {
  document.querySelector('.selected').remove();
}

adicionarTarefaButton.addEventListener('click', adicionaTarefa);
apagaTudoButton.addEventListener('click', removerTodasTarefas);
removeFinalizadosButton.addEventListener('click', removerTarefasFinalizadas);
salvarTarefasButton.addEventListener('click', salvarTarefas);
moverCimaButton.addEventListener('click', moverTarefaParaCima);
moverBaixoButton.addEventListener('click', moverTarefaParaBaixo);
removerSelecionadoButton.addEventListener('click', removerSelecionado);
