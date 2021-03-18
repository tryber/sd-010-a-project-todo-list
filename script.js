let input = document.querySelector('#texto-tarefa');
let lista = document.querySelector('#lista-tarefas');

function adiciona() {
  let elemento = document.createElement('li');
  elemento.innerText = input.value;
  lista.appendChild(elemento);
  input.value = null;
}

lista.addEventListener('click', pintar);

function pintar(event) {
  let elementAcionado = event.target;
  let itens = document.querySelectorAll('li');
  for (let index = 0; index < itens.length; index += 1) {
    itens[index].classList.remove('selected');
  }
  elementAcionado.classList.add('selected');
}

lista.addEventListener('dblclick', riscar);

function riscar(event) {
  let element = event.target;
  element.classList.toggle('completed');
}

let botaoLimpar = document.querySelector('#apaga-tudo');
botaoLimpar.addEventListener('click', limpar);

function limpar() {
  lista.innerHTML = null;
}

let removFinalizados = document.querySelector('#remover-finalizados');
removFinalizados.addEventListener('click', remover);

function remover() {
  let itensSelect = document.querySelectorAll('.completed');
  itensSelect.forEach((removeitem) => removeitem.remove());
}