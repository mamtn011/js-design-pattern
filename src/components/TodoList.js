"use client";
import Todos from "@/store/Todos";
import React, { useState } from "react";

const TodoList = () => {
  const [store] = useState(new Todos());
  const [todos, setTodos] = useState(store.getTodos());
  return (
    <div>
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className="rounded-sm text-sm, w-full, bg-slate-200 p-2 ring-0 ring-gray-800 mb-2"
            onClick={() => {}}
          >
            {todo}
          </li>
        ))}
      </ul>
      <div>
        <button
          className="mt-4 rounded-md hover:bg-gray-700 text-white px-3 py-1 shadow-md bg-blue-400"
          onClick={() => {
            store.addTodo(`Test Todo ${(Math.random() * 300).toFixed()}`);
            setTodos([...store.getTodos()]);
            console.log(store);
          }}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default TodoList;
