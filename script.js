let input = document.querySelector('#texto-tarefa');
let button = document.querySelector('#criar-tarefa');
let list = document.querySelector('#lista-tarefas');

button.addEventListener('click', click);

function click() {
    let listLi = document.createElement('li');
    listLi.innerText = input.value;
    list.appendChild(listLi);
    input.value = '';
}

//requisito 7 e 8
 list.addEventListener('click', function clickItem(e) {
    let listItem = list.childNodes;
    for (let index = 0; index < listItem.length; index += 1) {
        listItem[index].style.backgroundColor = 'white';
    }
    if (e.target.localName === 'li')
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

//requisito 9
list.addEventListener('dblclick', function clickItem(e) {
    //let listItem = list.childNodes;
    //for (let index2 = 0; index2 < listItem.length; index2 += 1) {
        //listItem[index2].classList.remove('completed');
        //listItem[index2].style.textDecoration = 'none';
    //}
    //e.target.style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    if (e.target.localName === 'li')
    e.target.classList.toggle('completed');
});
/* list.addEventListener('dblclick', function clickItem(e) {
    let listItem = list.childNodes;
    for (let index3 = 0; index3 < listItem.length; index3 += 1) {
        listItem[index3].classList.remove('completed');
        listItem[index3].style.textDecoration = 'none';
    }
}); */