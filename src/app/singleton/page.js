"use client";
import TodoList from "@/components/singleton/TodoList";
import todoInstance from "@/store/singleton/Todos";
import { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState(todoInstance.getTodos());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full md:w-2/3 lg:w-1/3 flex gap-4 justify-between">
        <div className="mt-8">
          <TodoList store={todoInstance} todos={todos} setTodos={setTodos} />
        </div>
        <div className="mt-8">
          <TodoList store={todoInstance} todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </main>
  );
}
