function liCreation (){
    let li = document.querySelector('#criar-tarefa');
    let getOlList = document.querySelector('#lista-tarefas')
    li.addEventListener('click', () => {
        let Lcreate = document.createElement('li')
        let writeText = document.querySelector('#texto-tarefa').value;
        Lcreate.innerHTML = writeText;
        getOlList.appendChild(Lcreate);
        document.getElementById('texto-tarefa').value = '';
    })
}
liCreation();

function grayChange (){
    let liClass = document.querySelector('ol');
    liClass.addEventListener("click", function(gray){
    let selectedLi = document.querySelector(".selected")
        if (selectedLi != null){
            document.querySelector(".selected").classList.remove("selected")
        }
        gray.target.classList.add("selected")
  })
}
grayChange();

function completedLine (){
    let olLine = document.querySelector('#lista-tarefas')
    olLine.addEventListener('dblclick', function (lineEvent) {
       lineEvent.target.classList.toggle('completed')
    })
}
completedLine();

function eraseChild (){
    let eraseButton = document.querySelector('#apaga-tudo')
    eraseButton.addEventListener('click', function(){
        let eChild = document.querySelectorAll('#lista-tarefas>li')
        for (let index = 0; index < eChild.length; index += 1) {
            let liChild = eChild[index];
            liChild.parentNode.removeChild(liChild)
        }
    })
}
eraseChild();

function eraseCompleted (){
    let eraseC = document.querySelector('#remover-finalizados');
    eraseC.addEventListener('click', function(){
        let eChild = document.querySelectorAll('#lista-tarefas>li');
        for (let index = 0; index < eChild.length; index += 1) {
            let liChild = eChild[index];
            if ((liChild.className === 'selected completed') || (liChild.className === 'completed selected') || (liChild.className === 'completed')){
              liChild.parentNode.removeChild(liChild);
            }
        }
    })
}
eraseCompleted();