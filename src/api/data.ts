import { ITodo } from "./api.types";

const api = process.env.API_URL!;

export async function fetchTodos(): Promise<ITodo[]> {
  try {
    const request = await fetch(api);
    const data = await request.json();

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch TODO's data");
  }
}
