const todos = [];

//* using factory function (not memory efficient)
// const createTodo = (todoText) => {
//   const id = Date.now();
//   return {
//     text: todoText,
//     id,
//     deleteSelf() {
//       const index = todos.findIndex((item) => item.id === id);
//       todos.splice(index, 1);
//     },
//   };
// };
//* using factory class (memory efficient)
class Todo {
  constructor(todoText) {
    this.id = Date.now();
    this.text = todoText;
  }
  deleteSelf() {
    const index = todos.findIndex((item) => item.id === this.id);
    todos.splice(index, 1);
  }
}
const Todos = {
  getTodos() {
    return todos;
  },
  addTodo(todo) {
    // todos.push(createTodo(todo));
    todos.push(new Todo(todo));
  },
};
export default Object.freeze(Todos);
