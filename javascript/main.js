const addTask = document.querySelector('.addTask');
const todoList = document.querySelector('.todos');
const todoItem = document.querySelector('.todos li');
const search = document.getElementById('search');

//gerar nova tarefa
function gerarTodo(todo){
  const html = `
  <li>${todo} <i class="fas fa-minus-circle delete"></i></li>
  `
  todoList.innerHTML += html;
}

// adicionar tarefa
addTask.addEventListener('submit', e => {
  e.preventDefault();

  const todo = addTask.add.value.trim();

  if(todo){
    gerarTodo(todo);
    addTask.add.value = '';
  }

});

//remover todo
todoList.addEventListener('click', e => {
  if( e.target.classList.contains('delete') ){
    e.target.parentElement.remove();
  }
});

