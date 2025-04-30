import Button from "@/components/Button/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">404 Not Found</h2>
      <Link href="/">
        <Button asLink variant="primary">
          Home
        </Button>
      </Link>
    </section>
  );
}
