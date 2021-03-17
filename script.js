function inputElement(){
    
    const tagInput = document.querySelector('#texto-tarefa');
    const tagLi = document.createElement('li');
    tagLi.innerText = tagInput.value;
    tagLi.classList.add('elemento')
    const tagOl = document.querySelector('#lista-tarefas');
    tagOl.appendChild(tagLi);
    tagInput.value = null;
}

function createAssignment() {
    const button = document.querySelector('#criar-tarefa');
    button.addEventListener('click', inputElement) 
}

createAssignment();
 
function handleColorsInLine(event){
  
   const liTag = document.getElementsByTagName('li');
   const evento = event.target;
   for (let index = 0; index < liTag.length; index ++) {
       liTag[index].style.backgroundColor = document.body.style.backgroundColor;
   if (evento.localName == 'li') {
        evento.style.backgroundColor = 'rgb(128, 128, 128)';
  };
 };
};

 function selectAssignment() {
  const olTag = document.getElementsByTagName('ol')[0];
  olTag.addEventListener('click', handleColorsInLine)
};
  
  selectAssignment();
  
  function clearList(){
    const textContent = document.querySelector('#lista-tarefas');
    textContent.innerHTML = null;
  }

  function clearListEvent() {
    const clearAllList = document.querySelector('#apaga-tudo');
    clearAllList.addEventListener('click', clearList);
  }
  clearListEvent();