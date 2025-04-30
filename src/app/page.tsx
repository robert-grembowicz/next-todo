import { Suspense } from "react";
import Link from "next/link";
import Todos from "@/components/Todos/Todos";
import TodosSkeleton from "@/components/TodosSkeleton/TodosSkeleton";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<TodosSkeleton />}>
        <Todos />
      </Suspense>

      <Link href="/simulate" className="absolute top-2 right-2">
        <span>simulate error</span>
      </Link>
    </>
  );
}
