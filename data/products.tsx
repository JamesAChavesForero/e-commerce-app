export async function fetchProducts(): Promise<any[]> {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    const errorMessage = `Error fetching data: ${(error as Error).message}`;
    throw new Error(errorMessage);
  }
}
