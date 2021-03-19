
    let botao = document.getElementById('criar-tarefa');

    botao.addEventListener('click', (evento) => {
    let recuperandoListaOrdenada = document.querySelector('#lista-tarefas')
    let criandoLi = document.createElement('li');
    criandoLi.className = 'list'
      criandoLi.innerText = document.getElementById('texto-tarefa').value;
      recuperandoListaOrdenada.appendChild(criandoLi).innerHTML
      document.getElementById('texto-tarefa').value;
      document.getElementById('texto-tarefa').value = '';
    });
    const ol = document.querySelector('#lista-tarefas')
    const recuperaClass = document.getElementsByClassName('list')
    function addBackgroundColor() {
        ol.addEventListener('click', (event) => {
          const background = event.target;
          for (let index = 0; index < recuperaClass.length; index += 1) {
            if (recuperaClass[index].className.includes('selected')) {
              recuperaClass[index].classList.remove('selected');
            }
          }
          background.classList.add('selected');
        });
      }
      addBackgroundColor();

      function addcompleted() {
        ol.addEventListener('dblclick', (event) => {
          const riscar = event.target;
          
            if (riscar.className.includes('completed')) {
              riscar.classList.remove('completed');
              riscar.classList.remove('selected')
            } else {
                riscar.classList.add('completed')
                riscar.classList.remove('selected')
            }
          
         
        });
      }
      addcompleted();
      const botaoLimpa = document.getElementById('apaga-tudo')
      function limpa () {
          ol.innerHTML = '';
          }
     
      botaoLimpa.addEventListener('click', limpa )


      const removeFinalizados = document.getElementById('remover-finalizados')
      function removeFinal() {
          const completed = document.querySelectorAll('.completed')    
        
          for ( let index = 0; index < completed.length; index += 1) {

              
               ol.removeChild(completed[index])
              
          }
      }
      removeFinal();

      removeFinalizados.addEventListener('click', removeFinal)



      const removerSelecionado = document.getElementById('remover-selecionado')
      function removeSel() {
             
        
          for ( let index = 0; index < recuperaClass.length; index += 1) {
            if (recuperaClass[index].className.includes('selected'))  {

                ol.removeChild(recuperaClass[index])
            }
              
              
          }
      }
      removeFinal();

      removerSelecionado.addEventListener('click', removeSel)


      const salvarTarefas = document.getElementById('salvar-tarefas')
      salvarTarefas.addEventListener('click', function() {
          localStorage.setItem('list', ol.innerHTML);
      })
      ol.innerHTML = localStorage.getItem('list')