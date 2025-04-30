"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import Button from "@/components/Button/Button";

interface IErrorProps {
  error: Error & { digest?: string };
}

export default function Error({ error }: IErrorProps) {
  const handleClick = () => {
    redirect("/");
  };

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-dvh flex-col items-center justify-center">
      <h2 className="text-center mb-2">Something went wrong!</h2>
      <Button onClick={handleClick} variant="primary">
        Try again
      </Button>
    </section>
  );
}
