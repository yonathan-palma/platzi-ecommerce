import { API_PRODUCTS } from '../const';

export async function getProducts() {
  try {
    let response = await fetch(API_PRODUCTS);
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error('error en la peticion ');
    // console.log(error);
  }
}
