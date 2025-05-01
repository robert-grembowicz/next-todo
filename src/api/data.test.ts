import { fetchTodos } from "./data";

describe("fetchTodos", () => {
  beforeEach(() => {
    jest.resetModules();
    (global.fetch as jest.Mock) = jest.fn();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("throws an error when withError is true", async () => {
    await expect(fetchTodos(true)).rejects.toThrow();
  });

  it("throws an error when fetch fails", async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    await expect(fetchTodos()).rejects.toThrow;
  });
});
