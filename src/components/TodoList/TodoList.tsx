"use client";

import { useState } from "react";
import { ITodo } from "@/api/api.types";

interface TodosProps {
  initialTodos: ITodo[];
}

type TFilter = "all" | "completed" | "incomplete";

export function TodoList({ initialTodos }: TodosProps) {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [filter, setFilter] = useState<TFilter>("all");

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filtered = todos.filter((todo) => {
    switch (filter) {
      case "completed":
        return todo.completed;
      case "incomplete":
        return !todo.completed;
      default:
        return true;
    }
  });

  return (
    <>
      <div className="mb-4 flex justify-end gap-2">
        {(["all", "completed", "incomplete"] as TFilter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded border text-sm hover:cursor-pointer ${
              filter === f
                ? "bg-blue-600 border-blue-600 text-white"
                : "border-gray-300 hover:bg-gray-100 hover:text-black"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul
        className="space-y-2 overflow-y-scroll overflow-x-hidden"
        aria-label="Lista zadań"
      >
        {filtered.map((todo) => (
          <li key={todo.id} className="flex items-center gap-2 my-4">
            <label
              className="flex items-center
             gap-2 cursor-pointer w-full"
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                aria-checked={todo.completed}
                className="h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 shrink-0"
              />
              <span
                className={`${
                  todo.completed ? "line-through text-gray-500" : ""
                } text-lg`}
              >
                {todo.title}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}
