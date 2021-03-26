const removerSelecionado = document.querySelector('#remover-selecionado');
const criarTarefa = document.querySelector('#criar-tarefa');
const textoTarefa = document.querySelector('#texto-tarefa');
const listaTarefas = document.querySelector('#lista-tarefas');
const color = 'rgb(128, 128, 128)';

criarTarefa.addEventListener('click', () => {
  const novaLi = document.createElement('li');
  novaLi.innerText = textoTarefa.value;
  listaTarefas.appendChild(novaLi);
  textoTarefa.value = '';
});

function seletorItem() {
  function seletor(event) {
    const li = document.querySelectorAll('li');
    /* event.target.style.backgroundColor = color; */
    for (let index = 0; index < li.length; index += 1) {
      if (li[index].style.backgroundColor === color) {
        li[index].style.backgroundColor = '';
        li[index].classList.remove('seletorColor');
      }
    }
    event.target.style.backgroundColor = color;
    event.target.classList.add('seletorColor');
  }
  listaTarefas.addEventListener('click', seletor);
}
seletorItem();

function listaConcluida() {
  function riscada(event) {
    if (event.target.classList.contains('completed')) {
      event.target.classList.remove('completed');
      event.target.style.textDecoration = '';
    } else {
      event.target.classList.add('completed');
      event.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
  listaTarefas.addEventListener('dblclick', riscada);
}
listaConcluida();

function LimparTudo() {
  const limparTudo = document.querySelector('#apaga-tudo');
  function funçaoLimparTudo() {
    listaTarefas.innerText = '';
  }
  limparTudo.addEventListener('click', funçaoLimparTudo);
}
LimparTudo();

function removerFinalizados() {
  const butonRemoverFinalizados = document.querySelector('#remover-finalizados');
  function butaoFinalizados() {
    const completo = document.querySelectorAll('.completed');
    for (let index = 0; index < completo.length; index += 1) {
      listaTarefas.removeChild(completo[index]);
    }
  }
  butonRemoverFinalizados.addEventListener('click', butaoFinalizados);
}
removerFinalizados();

const pegarListaLocalStorage = () => {
  if (localStorage.getItem('key') !== undefined) {
    const listaItens = localStorage.getItem('key');
    listaTarefas.innerHTML = listaItens;
  }
  const salvarTarefas = document.querySelector('#salvar-tarefas');
  salvarTarefas.addEventListener('click', () => {
    localStorage.setItem('key', listaTarefas.innerHTML);
  });
};
pegarListaLocalStorage();

removerSelecionado.addEventListener('click', () => {
  const classeSeletor = document.querySelector('.seletorColor');
  classeSeletor.remove();
});
