let todos = [];

const addTodo = (e) => {
  e.preventDefault();

  const todoTitle = document.querySelector(".todo-input").value;

  if (todoTitle) {
    const newTodo = {
      title: todoTitle,
      completed: false,
    };

    todos.push(newTodo);
    renderTodo();
  }
};

const renderTodo = () => {
  const todoList = document.querySelector(".todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const todoItemLeftSection = document.createElement("div");
    todoItemLeftSection.classList.add("todo-item-left-section");

    const todoItemTitle = document.createElement("h5");
    todoItemTitle.classList.add("todo-item-title");

    const todoItemRightSection = document.createElement("div");
    todoItemRightSection.classList.add("todo-item-right-section");

    const todoItemCheckbox = document.createElement("input");
    todoItemCheckbox.setAttribute("type", "checkbox");
    todoItemCheckbox.setAttribute("name", "todo-item-checkbox");
    todoItemCheckbox.setAttribute("id", "todo-item-checkbox");

    if (todo.completed) {
      todoItem.classList.add("completed");
    }

    todoList.appendChild(todoItem);
  });
};
