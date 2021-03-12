document.getElementById('criar-tarefa').addEventListener('click', () => {
  const btnContainer = document.getElementById('texto-tarefa').value;
  const li = document.createElement('li');
  const task = document.createTextNode(btnContainer);
  li.appendChild(task);
  document.getElementById('lista-tarefas').appendChild(li);
  document.getElementById('texto-tarefa').value = '';

  li.addEventListener('click', (event) => {
    const taskItem = document.getElementById('lista-tarefas').childNodes;
    const taskColor = event.target;
    for (let index = 0; index < taskItem.length; index += 1) {
      if (taskItem[index].style.backgroundColor === 'rgb(128, 128, 128)') {
        taskItem[index].style.backgroundColor = 'white';
      }
    }
    taskColor.style.backgroundColor = 'rgb(128, 128, 128)';
  });

  li.addEventListener('dblclick', () => {
    li.classList.toggle('completed');
  });
});

const clearBtn = document.querySelector('#apaga-tudo');
clearBtn.addEventListener('click', () => {
  const taskList = document.querySelector('#lista-tarefas');
  taskList.innerHTML = '';
});
