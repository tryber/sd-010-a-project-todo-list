function addTarefa() {
  const itemlist = document.createElement('li');
  itemlist.classList.add('item');
  listaTarefas.appendChild(itemlist);
  itemlist.innerText = texto.value;
  texto.value = '';
}

function mudaCor(evento) {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.children[index].style.backgroundColor = '';
    listaTarefas.children[index].classList.remove('selec');
  }
  evento.target.style.background = 'rgb(128, 128, 128)';
  evento.target.classList.add('selec');
}

// Requisito 09 Contribuição Lucas Pedroso
function riscaTexto(evento) {
  evento.target.classList.toggle('completed');
}

function apagaLista() {
  for (let index = 0; index < listaTarefas.children.length; index += 1) {
    listaTarefas.innerHTML = '';
  }
}

function removeFinalizados() {
  const removeitem = document.getElementsByClassName('completed');
  let cont = removeitem.length;
  while (cont > 0) {
    for (let index = 0; index < removeitem.length; index += 1) {
      listaTarefas.removeChild(removeitem[index]);
      cont -= 1;
      console.log(cont);
    }
  }
}
// Contribuição Renzo
function moverCima() {
  let itemselec = document.getElementsByClassName('item selec')[0];
  const listali = document.getElementsByTagName('li');
  if (itemselec === listali[0]) {
    return;
  }
  for (let index = 0; index < listali.length; index += 1) {
    if (itemselec === listali[index]) {
      itemselec.outerHTML = listali[index - 1].outerHTML;
      listali[index - 1].outerHTML = itemselec.outerHTML;
    }
  }
}
// Contribuição Renzo
function moverBaixo() {
  const itemselec = document.getElementsByClassName('item selec')[0];
  const listali = document.getElementsByTagName('li');
  if (itemselec === listali[listali.length - 1]) return;
  for (let index = 0; index < listali.length; index += 1) {
    if (itemselec === listali[index]) {
      itemselec.outerHTML = listali[index + 1].outerHTML;
      listali[index + 1].outerHTML = itemselec.outerHTML;
    }
  }
}

function removeSel() {
  const itemselec = document.getElementsByClassName('item selec');
  const listali = document.getElementsByTagName('li');
  for (let index = 0; index < listali.length; index += 1) {
    if (itemselec === listali[index]) {
      listaTarefas.children.remove(itemselec);
    }
  }
}

const bt = document.getElementById('criar-tarefa');
const texto = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const btal = document.getElementById('apaga-tudo');
const btrf = document.getElementById('remover-finalizados');
const btup = document.getElementById('mover-cima');
const btdw = document.getElementById('mover-baixo');
const btsv = document.getElementById('salvar-tarefas');
const btrms = document.getElementById('remover-selecionado');

bt.addEventListener('click', addTarefa);
listaTarefas.addEventListener('click', mudaCor);
listaTarefas.addEventListener('dblclick', riscaTexto);
btal.addEventListener('click', apagaLista);
btrf.addEventListener('click', removeFinalizados);
btup.addEventListener('click', moverCima);
btdw.addEventListener('click', moverBaixo)

btsv.addEventListener('click', () => {
  localStorage.setItem('key', listaTarefas.innerHTML);
});
// Requisito feito com ajuda do Thiago Souza
const pegarItens = () => {
  if (localStorage.getItem('key') !== undefined) {
    const pegarItem = localStorage.getItem('key');
    listaTarefas.innerHTML = pegarItem;
  }
};
pegarItens(); 

btrms.addEventListener('click', removeSel);
