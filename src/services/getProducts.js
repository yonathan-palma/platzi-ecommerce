import { API_PRODUCTS } from '../const';

export async function getProducts(id = '') {
  try {
    let response = await fetch(`${API_PRODUCTS}${id}`);
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error('error en la peticion ');
    // console.log(error);
  }
}
