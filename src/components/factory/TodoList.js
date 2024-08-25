const TodoList = ({ store, todos, setTodos }) => {
  return (
    <div>
      <ul>
        {todos &&
          todos.length > 0 &&
          todos.map((todo, index) => (
            <li
              key={index}
              className="rounded-sm text-sm, w-full, bg-slate-200 p-2 ring-0 ring-gray-800 mb-2 cursor-pointer"
              onClick={() => {
                todo.deleteSelf();
                setTodos([...store.getTodos()]);
              }}
            >
              {todo.text}
            </li>
          ))}
      </ul>
      <div>
        <button
          className="mt-4 rounded-md hover:bg-gray-700 text-white px-3 py-1 shadow-md bg-blue-400"
          onClick={() => {
            store.addTodo(`Test Todo ${(Math.random() * 300).toFixed()}`);
            setTodos([...store.getTodos()]);
            console.log({ store, todos });
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
