import { Suspense } from "react";

import { fetchTodos } from "@/api/data";
import { TodoList } from "@/components/TodoList/TodoList";

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)] p-4 sm:p-8 h-dvh">
      <main className="flex lg:max-w-2/3 md:max-w-4/5 shadow-sm p-4 sm:p-8 bg-(--background) rounded-lg">
        <section aria-labelledby="todo-heading" className="flex flex-col">
          <h1
            id="todo-heading"
            className="text-4xl font-bold text-blue-600 sm:mb-4 text-center p-4 pt-0 sm:p-6 "
          >
            TODO&apos;s List
          </h1>
          <Suspense fallback={<p>loading...</p>}>
            <TodoList initialTodos={todos} />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
