import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";
import { ITodo } from "@/api/api.types";

const mockTodos: ITodo[] = [
  { id: 1, title: "Do laundry", completed: false, userId: 1 },
  { id: 2, title: "Buy groceries", completed: true, userId: 2 },
  { id: 3, title: "Walk the dog", completed: false, userId: 3 },
];

describe("TodoList component", () => {
  beforeEach(() => {
    render(<TodoList initialTodos={mockTodos} />);
  });

  it("renders the same number of list items as todos", () => {
    const items = screen.getAllByRole("listitem");
    expect(items).toHaveLength(mockTodos.length);
  });

  it("renders all todos by default", () => {
    expect(screen.getByText("Do laundry")).toBeInTheDocument();
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
  });

  it("filters completed todos", () => {
    fireEvent.click(screen.getByText("completed"));
    expect(screen.getByText("Buy groceries")).toBeInTheDocument();
    expect(screen.queryByText("Do laundry")).not.toBeInTheDocument();
    expect(screen.queryByText("Walk the dog")).not.toBeInTheDocument();
  });

  it("filters incomplete todos", () => {
    fireEvent.click(screen.getByText("incomplete"));
    expect(screen.queryByText("Buy groceries")).not.toBeInTheDocument();
    expect(screen.getByText("Do laundry")).toBeInTheDocument();
    expect(screen.getByText("Walk the dog")).toBeInTheDocument();
  });

  it("toggles todo completion", () => {
    const checkbox = screen.getByLabelText("Do laundry") as HTMLInputElement;
    expect(checkbox.checked).toBe(false);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
});
