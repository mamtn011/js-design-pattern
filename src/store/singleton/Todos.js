//* using class
// const todos = [];
// let instance = null;

// class Todos {
//   constructor() {
//     if (instance) {
//       throw new Error("You can only have one instance of Todos");
//     }
//     instance = this;
//   }
//   getInstance() {
//     return instance;
//   }
//   getTodos() {
//     return todos;
//   }
//   addTodo(todo) {
//     todos.push(todo);
//   }
// }
// const todoInstance = new Todos();
// Object.freeze(todoInstance);
// export default todoInstance;

//* using object
const todos = [];
const Todos = {
  getTodos() {
    return todos;
  },
  addTodo(todo) {
    todos.push(todo);
  },
};
export default Object.freeze(Todos);
