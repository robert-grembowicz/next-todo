import { fetchTodos } from "@/api/data";
import { TodoList } from "../TodoList/TodoList";

export default async function Todos() {
  const todos = await fetchTodos();

  return <TodoList initialTodos={todos} />;
}
