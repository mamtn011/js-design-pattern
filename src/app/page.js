import TodoList from "@/components/TodoList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full md:w-2/3 lg:w-1/3 flex gap-4 justify-between">
        <div className="mt-8">
          <TodoList />
        </div>
        <div className="mt-8">
          <TodoList />
        </div>
      </div>
    </main>
  );
}
