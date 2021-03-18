//FUNÇÃO LIGADA AO BOTÃO DE CRIAR TAREFAS
function adicionarElemento() {
  criarElemento('ol' ,'li',document.querySelector('#texto-tarefa').value , 'tarefa');
  document.querySelector('#texto-tarefa').value='';
}

//CRIAR ELEMENTOS COM BASE NA CAIXA DE TEXTO
function criarElemento (lugarPraOndeOElementoVai ,tipoDoElemento, texto, classeDoElemento){
  let elementoCriado;
  variavelDolugarPraOndeOElementoVai = document.querySelector(lugarPraOndeOElementoVai)
  elementoCriado = document.createElement(tipoDoElemento);
  elementoCriado.classList.add(classeDoElemento);
  elementoCriado.innerText = texto;
  variavelDolugarPraOndeOElementoVai.appendChild(elementoCriado);
  console.log('criado');
  document.querySelector('.tarefa').parentElement.lastElementChild.addEventListener('click', this.selecao);
  document.querySelector('.tarefa').parentElement.lastElementChild.addEventListener('dblclick', this.completed);
}

//FUNÇÃO PRA SELECÃO DO ELEMENTO
this.selecao = function funcaoDeSelecao(evento) {
  let e = this
  document.querySelectorAll('.tarefa').forEach(elementos => elementos.classList.remove('selected'));
  document.querySelectorAll('.tarefa').forEach(elementos => elementos.style.backgroundColor = 'white');
  e.classList.add("selected");
  e.style.backgroundColor = 'rgb(128, 128, 128)';
  console.log('selecionado');
  }

//FUNÇÃO PRA O ELEMENTO COMPLETADO
  this.completed = function funcaoDeCompletado(evento) {
    let e = this
        if (e.classList.contains('completed')) {
          e.classList.remove('completed');
          console.log('não concluido');e.style.textDecoration='none';
          } else {e.classList.add('completed');console.log('não concluido');
          e.style.textDecoration='none';
          e.style.textDecoration ='line-through solid rgb(0, 0, 0)';
        }
  }

//EXCLUIR TODOS OS ELMENTOS DE DE UMA CLASSE OU ID
function excluirTodosElementosDaMesmaClasseOuId (classOuId) {
    let quantidadeDeElementosParaExcluir = document.querySelectorAll(classOuId).length;
    for (indexExcluirElementos = 0; indexExcluirElementos < quantidadeDeElementosParaExcluir; indexExcluirElementos+=1) {
        document.querySelectorAll(classOuId)[0].remove()
    }
}

//CRIA A FUNÇÃO PARA EXTRAIR O CONTEUDO DA CAIXA DE TEXTO
  function funcaoDaCaixaDeTexto (evento) {
      let valorDaCaixaDeTexto = document.querySelector('#texto-tarefa').value
      console.log(valorDaCaixaDeTexto);
      console.log(evento.target);
  }
