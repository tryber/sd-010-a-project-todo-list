// requisito 5 e 6 feito com a ajuda do colega Lucas Pedroso
function button () {
	let addButton = document.querySelector('#criar-tarefa');
  addButton.addEventListener('click', function () {
	let list = document.querySelector('#lista-tarefas');
	let writedText = document.querySelector('#texto-tarefa')
	let li = document.createElement('li');
	li.classList.add('color-li')
	li.innerHTML = writedText.value;
	list.appendChild(li);
	document.querySelector('#texto-tarefa').value = '';
});
}
button ()

function colorLi () {
	let tasks = document.getElementsByClassName('color-li');
	let tasksList = document.querySelector('#lista-tarefas');
	tasksList.addEventListener('click', function (event) {
		let tasksSelect = event.target
		for (let index = 0; index < tasks.length; index += 1) {
			if (tasks[index].className.includes('li-select')) {
				tasks[index].classList.remove('li-select')
			} else {
				tasksSelect.classList.add('li-select')
			}
		}
	})
}
colorLi ()

function taskCompleted() {
	let tarefas = document.getElementsByClassName('color-li');
	let listaDeTarefas = document.querySelector('#lista-tarefas');
	listaDeTarefas.addEventListener('dblclick', function (event) {
		let tarefaSelecionada = event.target;
			if (tarefaSelecionada.className.includes('completed')) {
				tarefaSelecionada.classList.remove('completed');
			} else {
				tarefaSelecionada.classList.add('completed');
			}
	})
}
taskCompleted()