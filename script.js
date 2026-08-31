// Elementos do DOM
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todosList = document.getElementById('todosList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const clearAllBtn = document.getElementById('clearAllBtn');
const totalTasksEl = document.getElementById('totalTasks');
const activeTasksEl = document.getElementById('activeTasks');
const completedTasksEl = document.getElementById('completedTasks');

// Estado
let todos = [];
let currentFilter = 'all';

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  loadTodos();
  render();
  setupEventListeners();
});

function setupEventListeners() {
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      render();
    });
  });

  clearCompletedBtn.addEventListener('click', clearCompleted);
  clearAllBtn.addEventListener('click', clearAll);
}

// Adicionar Tarefa
function addTodo() {
  const text = todoInput.value.trim();

  if (!text) {
    alert('Por favor, digite uma tarefa!');
    return;
  }

  if (text.length > 200) {
    alert('Tarefa muito longa! Máximo de 200 caracteres.');
    return;
  }

  const todo = {
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleDateString('pt-BR')
  };

  todos.unshift(todo);
  todoInput.value = '';
  todoInput.focus();
  saveTodos();
  render();
}

// Alternar Tarefa
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos();
    render();
  }
}

// Deletar Tarefa
function deleteTodo(id) {
  todos = todos.filter(t => t.id !== id);
  saveTodos();
  render();
}

// Limpar Concluídas
function clearCompleted() {
  const count = todos.filter(t => t.completed).length;
  
  if (count === 0) {
    alert('Nenhuma tarefa concluída para limpar!');
    return;
  }

  if (confirm(`Deseja deletar ${count} tarefa(s) concluída(s)?`)) {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    render();
  }
}

// Limpar Tudo
function clearAll() {
  if (todos.length === 0) {
    alert('Lista vazia!');
    return;
  }

  if (confirm('Deseja deletar TODAS as tarefas? Esta ação não pode ser desfeita!')) {
    todos = [];
    saveTodos();
    render();
  }
}

// Renderizar
function render() {
  const filteredTodos = getFilteredTodos();
  
  // Atualizar Stats
  updateStats();

  // Renderizar Lista
  if (filteredTodos.length === 0) {
    todosList.innerHTML = '';
    emptyState.classList.add('show');
  } else {
    emptyState.classList.remove('show');
    todosList.innerHTML = filteredTodos.map(todo => `
      <div class="todo-item ${todo.completed ? 'completed' : ''}">
        <input 
          type="checkbox" 
          class="checkbox" 
          ${todo.completed ? 'checked' : ''}
          onchange="toggleTodo(${todo.id})"
        >
        <div>
          <div class="todo-text">${escapeHtml(todo.text)}</div>
          <div class="todo-date">${todo.createdAt}</div>
        </div>
        <button class="delete-btn" onclick="deleteTodo(${todo.id})">Deletar</button>
      </div>
    `).join('');
  }
}

// Atualizar Stats
function updateStats() {
  const total = todos.length;
  const completed = todos.filter(t => t.completed).length;
  const active = total - completed;

  totalTasksEl.textContent = total;
  activeTasksEl.textContent = active;
  completedTasksEl.textContent = completed;
}

// Filtrar Tarefas
function getFilteredTodos() {
  switch (currentFilter) {
    case 'active':
      return todos.filter(t => !t.completed);
    case 'completed':
      return todos.filter(t => t.completed);
    case 'all':
    default:
      return todos;
  }
}

// Local Storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function loadTodos() {
  const saved = localStorage.getItem('todos');
  todos = saved ? JSON.parse(saved) : [];
}

// Escapar HTML para segurança
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}