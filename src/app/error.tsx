"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const reset = () => {
    redirect("/");
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex h-dvh flex-col items-center justify-center">
      <h2 className="text-center mb-2">Something went wrong!</h2>
      <Button onClick={reset} variant="primary">
        Try again
      </Button>
    </main>
  );
}
