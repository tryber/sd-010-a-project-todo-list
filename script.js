window.onload = function() {
  
  const list = document.querySelector('#lista-tarefas');
  const addButton = document.querySelector('#criar-tarefa');
  const rmvButton = document.querySelector('#remover-finalizados');
  const rmvAllButton = document.querySelector('#apaga-tudo');

  rmvAllButton.addEventListener('click', function(event){
    let allLi = document.querySelectorAll('li');
    if (allLi.length === 0){
      alert('Não ha tarefas');
    }else{
      for(index = 0; index < allLi.length; index += 1){
        allLi[index].remove();
      }
    }
  });

  rmvButton.addEventListener('click', function(event){
    let completed = document.querySelectorAll('.completed');
    if (completed.length === 0){
      alert('Não ha tarefas finalizadas');
    }else{
      for(index = 0; index < completed.length; index += 1){
        completed[index].remove();
      }
    }
  });

  addButton.addEventListener('click', function(event){
    let info = document.querySelector('#texto-tarefa');
    let ls = document.createElement('li');
    if(info.value === ''){
      alert('Nenhuma tarefa digitada');
    }else{
      ls.innerText = info.value;
      list.appendChild(ls);
      info.value = '';
    }
    
  });

  list.addEventListener('dblclick', function(event){
    let targetText = event.target;
    let TextWithRisk = document.querySelector('.completed');
    if(targetText.classList.value === 'completed selected'){
      targetText.classList.remove('completed');
    }else{
      targetText.classList.add('completed');
    }
  });

  list.addEventListener('click', function(event){
    let targetLi = event.target;
    let taskWithSelected = document.querySelector('.selected');
    if(taskWithSelected === null){
      targetLi.classList.add('selected');
    }else{
      taskWithSelected.classList.remove('selected');
      targetLi.classList.add('selected');
    }
  });

}
