function paragrafo() {
  const texto1 = document.getElementById('funcionamento')
  texto1.innerText = 'Clique duas vezes em um item para marcá-lo como completo'
}
paragrafo();

function listaOrdenada() {
  const pai = document.getElementById('lista')
  const filho = document.createElement('ol')
  pai.appendChild(filho)
  filho.id = 'lista-tarefas'
}
listaOrdenada();

function button() {
  const elemento = document.querySelector('button')
  elemento.id = 'criar-tarefa';
  const achandoInput = document.querySelector('#texto-tarefa')
  const pai = document.querySelector('ol');

  elemento.addEventListener('click', () => {
    const filhoDePai = document.createElement('li');
    filhoDePai.innerText = achandoInput.value;
    pai.appendChild(filhoDePai);
    achandoInput.value = ''
  })
}
button();

function corItenLista() {
  const lista = document.getElementsByTagName('li')
  const paiLista = document.getElementById('lista-tarefas')
  paiLista.addEventListener('click', (e) => {
    const target1 = e.target
    for (let index = 0; index < lista.length; index += 1) {
      lista[index].style.backgroundColor = document.body.style.backgroundColor /* restaura a cor da minha lista para a cor padrão do body... */
      if (target1.localName === 'li') {
        target1.style.backgroundColor = 'rgb(128,128,128)'
      }
    }
  })
}

corItenLista();

function check() {
  const pai = document.querySelector('ol');
  pai.addEventListener('dblclick', (e) => {
    const target2 = e.target;
    if (target2.classList.contains('completed')) {
      target2.classList.remove('completed')
      target2.style.textDecoration = ''
    } else {
      target2.classList.add('completed')
      target2.style.textDecoration = 'line-through'
    }
  });
}
check();

function buttonClear(){
  const button = document.getElementById('apaga-tudo')
  button.addEventListener('click', () => {
  document.querySelectorAll('ol')[0].innerHTML = ''
  })
}
buttonClear();