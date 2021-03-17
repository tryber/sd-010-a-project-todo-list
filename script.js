window.onload = function (){
    // Função para zerar input
    function clearInput () {
        document.getElementById('texto-tarefa').value = '';
    }
    // Função que apaga o conteúdo todo
    function apagaConteudo() {
        let apagaTudo = document.getElementById('apaga-tudo');
        let itemApagar = document.getElementsByTagName('li');
            apagaTudo.addEventListener('click', () => {
                for (let i = 0; i < itemApagar.length; i += 1) {
                    itemApagar[i].remove();
                    cont = 0;
                }
            })
    }
    // Função que define o BG ao clicar num item 
   /* function mostra () {

        let item = document.getElementsByTagName('li');
        for (let index = 0; index < item.length; index += 1) {
            let control = item[index];
            control.classList.add('control');
            control.addEventListener('click', (a) => {                
                a.target.style.backgroundColor = 'rgb(128, 128, 128)';
               console.log(control)
            })
            
        }
        
    }*/

            
    // Função que risca um item e remove (remove ainda não rolou)
   /*function line () {
        let selected = document.querySelectorAll('li');
        for (let index = 0; index < selected.length; index += 1) {
               let varIndex = selected[index];
            varIndex.addEventListener('dblclick', (a) => {
                if (a.target.classList.contains('completed')){
                a.target.classList.remove('completed');
                console.log(a.target.classList);}
                
                else {
                    a.target.classList.add('completed');
                    console.log(a.target.classList);
                }  

            })
        }
    }*/
    
    let addList = [];
    // Pega o clique do botão 
    let btn = document.getElementById("criar-tarefa");
    // cria a variável que irá receber o texto do input
    let pushInput = ''
    // cria um contador para adicionar mais elementos na lista
    let cont = 0;
    // Cria botão remove selecionados
     removeSelecionados = document.getElementById('remover-finalizados');

    
    btn.addEventListener('click', function (){
       
        pushInput = document.getElementById('texto-tarefa').value;
        
        // Cria os elementos 'li'
        let pushOl = document.getElementById('lista-tarefas');
        let creatLi = document.createElement('li');
        pushOl.appendChild(creatLi);
        
        addList = document.getElementsByTagName('li');
        
         addList[cont].innerText = pushInput;
        
            let varIndex = document.querySelector('ol');
            varIndex.addEventListener('dblclick', (a) => {
                a.target.classList.toggle("completed");
                
            })

        
            let bgClick = document.querySelector('ol')
            bgClick.addEventListener('click', (a) => {                
                for (let i = 0; i < addList.length; i += 1) {
                   addList[i].style.backgroundColor = 'rgb(225, 225, 225)';
               }
               a.target.style.backgroundColor = 'rgb(128, 128, 128)';
            })
            
        

        removeSelecionados.addEventListener('click', () => {
            for (let i = 0; i < addList.length; i += 1) {
                let checkItem = addList[i]; 
                if (checkItem.classList.contains('completed')) {
                    checkItem.remove();
                    cont = 0;
                }
            }
        })

        //adiciona a lista e acrescenta 1 números 
        cont += 1;
        // Pinta 29
        //mostra();    
        // Limpa o campo input
        clearInput();
        //line();
       // lineRemove();
       apagaConteudo();
    });
       
}