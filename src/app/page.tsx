import { Suspense } from "react";
import Link from "next/link";
import Todos from "@/components/Todos/Todos";
import TodosSkeleton from "@/components/TodosSkeleton/TodosSkeleton";
import Button from "@/components/Button/Button";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<TodosSkeleton />}>
        <Todos />
      </Suspense>

      <Link href="/simulate" className="absolute top-2 left-2">
        <Button asSpan variant="danger">
          simulate error
        </Button>
      </Link>
    </>
  );
}
