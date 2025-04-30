import { ITodo } from "./api.types";

const api = process.env.API_URL!;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTodos(): Promise<ITodo[]> {
  try {
    await delay(3000);

    const request = await fetch(api);
    const data = await request.json();

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch TODO's data");
  }
}
