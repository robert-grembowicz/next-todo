import Todos from "@/components/Todos/Todos";
import TodosSkeleton from "@/components/TodosSkeleton/TodosSkeleton";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex justify-center font-[family-name:var(--font-geist-sans)] p-4 sm:p-8 h-dvh">
      <main className="flex grow lg:max-w-2/3 md:max-w-4/5 shadow-sm p-4 sm:p-8 bg-(--background) rounded-lg">
        <section aria-labelledby="todo-heading" className="flex flex-col grow">
          <h1
            id="todo-heading"
            className="text-4xl font-bold text-blue-600 sm:mb-4 text-center p-4 pt-0 sm:p-6 "
          >
            TODO&apos;s List
          </h1>

          <Suspense fallback={<TodosSkeleton />}>
            <Todos />
          </Suspense>
        </section>
      </main>
    </div>
  );
}
