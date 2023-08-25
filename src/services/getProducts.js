import { API_PRODUCTS } from '../const';
import { FAKE_API } from '../const';

export async function getProducts(limit = 20) {
  try {
    let response = await fetch(`${FAKE_API}?limit=${limit}`);
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error('error en la peticion ');
    // console.log(error);
  }
}

export async function getSingleProducts(id = '1') {
  try {
    let response = await fetch(`${FAKE_API}/${id}`);
    let data = await response.json();
    return data;
  } catch (error) {
    throw new Error('error en la peticion ');
    // console.log(error);
  }
}
