// 5 REQUISITO
//criar clique para o botão

let incluseTask = document.getElementById('criar-tarefa');
incluseTask.addEventListener('click', taskAdd);

function taskAdd () {

    //recupera o input em uma variavel
    let valueInput = document.createTextNode(document.getElementById('texto-tarefa').value);
    //incluir no html
    let originaList = document.getElementById('lista-tarefas')
    let listAdd = document.createElement('li');
    
    originaList.appendChild(listAdd);
    
    listAdd.appendChild(valueInput);
    listAdd.classList.add('color-change');
    listAdd.addEventListener('click', newColor);
    listAdd.addEventListener('dblclick', doubleClick)
    //apagar input
    document.getElementById('texto-tarefa').value = '';
}

    // 7 REQUISITO
   
    // função para troca de cor
function newColor (event) {

    let selectedItem = event.target;    
    let itemSelectedCurrent = document.getElementsByClassName('elementSelected')
     if(itemSelectedCurrent.length > 0) {
        
        itemSelectedCurrent[0].classList.remove('elementSelected');
        
} selectedItem.classList.add('elementSelected');
    
}   

    // 9 REQUISITO
    // usado metodo toggle https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
function doubleClick (event) {
    let completItem = event.target;
    completItem.classList.toggle('completed');    
}

    //10 REQUISITO
    let deleteTask = document.getElementById('apaga-tudo');
    deleteTask.addEventListener('click', erase);

    function erase () {
        let eraseNoList = document.getElementById('lista-tarefas');
        eraseNoList.innerText = '';
    }

    //11 requisito
    let finishedRemove = document.getElementById('remover-finalizados');
    finishedRemove.addEventListener('click', deletFinish);

    function deletFinish () {
        let removeItemFinish = document.querySelectorAll('.completed');
        for(let index = 0; index <removeItemFinish.length; index +=1){
        removeItemFinish[index].remove();
    }
}
