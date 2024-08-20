class Todos {
  todos = [];
  constructor() {}
  getTodos() {
    return this.todos;
  }
  addTodo(todo) {
    this.todos.push(todo);
  }
}

export default Todos;
