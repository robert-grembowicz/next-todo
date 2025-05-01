import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button component", () => {
  it("renders a button by default", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button.tagName).toBe("BUTTON");
  });

  it("renders a span when asLink is true", () => {
    render(<Button asLink>Link styled</Button>);
    const span = screen.getByText(/link styled/i);
    expect(span.tagName).toBe("SPAN");
  });

  it("passes additional props to the button", () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("applies additional class names", () => {
    render(<Button className="custom-class">Styled</Button>);
    const button = screen.getByRole("button", { name: /styled/i });
    expect(button).toHaveClass("custom-class");
  });
});
