const addBtn = document.getElementById('criar-tarefa');
const textInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const clearAllBtn = document.getElementById('apaga-tudo');
const clearSelBtn = document.getElementById('remover-selecionado');
const clearComBtn = document.getElementById('remover-finalizados');
const saveBtn = document.getElementById('salvar-tarefas');


addBtn.addEventListener('click',function(){
    const taskItem = document.createElement('li');
    
    taskList.appendChild(taskItem);
    taskItem.innerHTML = textInput.value;
    taskItem.className = 'taskClass';
    textInput.value ="";
});
// Pra registro , o melhor é chamar as tags antes e nomear elas no js
// textImput seria considerado como null e por isso é necessário chamar-lo com .value:"" para dar uma string a ele.
// addevent listener não é necessário estar dentro de um window.on

// array.from https://www.w3schools.com/jsref/jsref_from.asp

clearAllBtn.addEventListener('click', function(){
    let allTasks = document.getElementsByTagName('li');
    Array.from(allTasks).forEach((value) => 
        value.remove());

    
});


//uso de => parece ser obrigatório após declarar event
//Foi necessário criar um event para assim poder usar as propriedades de .target
//https://www.w3schools.com/jsref/dom_obj_event.asp
//uso do togle pra nao fazer um if, se o elemento no parametro nao existir ele adiciona porém o contrário ele retira.
//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/classList
//Lembrando que completed esta sendo adicionado em classList então no CSS deve ser puxado com .completed
taskList.addEventListener('dblclick', (event) => {
    event.target.classList.toggle('completed');
});


clearComBtn.addEventListener('click',function(){
        let completeList = document.querySelectorAll('.completed');
        for (let pos = 0; pos<completeList.length; pos++){
            li = completeList[pos];
            taskList.removeChild(li);
        }
    });


/* Nossa senhora esse deu mto trabalho
Precisei entender o conceito de que não é só pq o selected
foi passado depois que eu não posso fazer uma checagem antes
Foi necessário entender o conceito de que mesmo recebendo algo
este algo ainda pode ser null
Foi necessário entender tb que background color pode continuar
existindo dentro da classe mesmo sem possuir nenhum valor.
 */

taskList.addEventListener('click',(event)=>{
const preSelected = document.querySelector('.selected');
if (preSelected != null) {
  preSelected.style.backgroundColor = '';
  preSelected.classList.remove('selected');
}
event.target.classList.add('selected');
});

clearSelBtn.addEventListener('click',function(){
    let selTask = document.querySelector('.selected');
    if (selTask != null){
        (selTask.parentNode).removeChild(selTask)
    }else{
        alert("É necessário selecionar um item antes de excluir-la")
    }
});

//Conceito estudado a partir do commit 
//https://github.com/tryber/sd-08-project-todo-list/pull/146
//foi utilizado e armazenado em pouco código tudo no taskList
saveBtn.addEventListener('click', function(){
  localStorage.setItem('List', taskList.innerHTML);
})
taskList.innerHTML = localStorage.getItem('List');

