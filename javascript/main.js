const addTask = document.querySelector('.addTask');
const todoList = document.querySelector('.todos');
const todoItems = document.querySelectorAll('.todo-item');
const search = document.getElementById('search');



//gerar nova tarefa
function gerarTodo(todo){
  const html = `
  <li class="todo-item">${todo} <i class="fas fa-minus-circle delete"></i></li>
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

//função para filtrar as todos
const filterTodos = item => {

  Array.from(todoList.children)
    .filter( (todo) => !todo.textContent.toLowerCase().includes(item) )
    .forEach ( (todo) => todo.classList.add('filter'));
  
  Array.from(todoList.children)
    .filter( todo => todo.textContent.toLowerCase().includes(item) )
    .forEach ( todo => todo.classList.remove('filter') );
};

//evento para filtrar as todos
search.addEventListener('keyup', () => {
  const item = search.value.toLowerCase().trim();
  filterTodos(item);
});
