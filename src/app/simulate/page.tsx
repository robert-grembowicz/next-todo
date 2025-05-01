export const dynamic = "force-dynamic";

import { fetchTodos } from "@/api/data";
import { TodoList } from "@/components/TodoList/TodoList";
import TodosSkeleton from "@/components/TodosSkeleton/TodosSkeleton";
import { Suspense } from "react";

async function FakeTodos() {
  const todos = await fetchTodos(true);

  return <TodoList initialTodos={todos} />;
}

export default async function Page() {
  return (
    <Suspense fallback={<TodosSkeleton />}>
      <FakeTodos />
    </Suspense>
  );
}
