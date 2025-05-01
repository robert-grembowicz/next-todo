/* eslint-disable react/display-name */
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import "@testing-library/jest-dom";
import { PropsWithChildren } from "react";

jest.mock("next/link", () => {
  return ({ children, href, ...rest }: PropsWithChildren<{ href: string }>) => (
    <a href={href} {...rest}>
      {children}
    </a>
  );
});

jest.mock("@/components/Todos/Todos", () => () => (
  <div data-testid="todos">Todos Component</div>
));

jest.mock("@/components/TodosSkeleton/TodosSkeleton", () => () => (
  <div data-testid="skeleton">Loading Skeleton</div>
));

describe("Home page", () => {
  it("renders a simulate error button", () => {
    render(<Home />);
    const button = screen.getByText(/simulate error/i);
    expect(button).toBeInTheDocument();
    expect(button.tagName).toBe("SPAN");
  });

  it("renders the link wrapper around the simulate error button", () => {
    render(<Home />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/simulate");
  });
});
