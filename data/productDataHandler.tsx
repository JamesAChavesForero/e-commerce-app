import { fetchProducts } from './products';

export async function fetchData() {
  try {
    const products = await fetchProducts();
    return products;
  } catch (error) {
    throw error;
  }
}