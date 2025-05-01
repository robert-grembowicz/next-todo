import { ITodo } from "./api.types";

const api = process.env.API_URL!;

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchTodos(withError?: boolean): Promise<ITodo[]> {
  try {
    await delay(5000);

    if (withError) {
      throw new Error("Error!!!");
    }

    const request = await fetch(api);
    const data = await request.json();

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch TODO's data");
  }
}
