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
// shapeArea
// function solution(n) {
//   return Math.pow(n,2) + Math.pow(n-1,2)
// }
// function solution2(n){
//   return n * ((n - 1) * 2) + 1
// }
// function solution3(n){
//   return 1 + 2 * n * (n-1)
// }

// function mySolulion(n) {
//   return (n**2) + ((n-1)**2)
// return (2**n) + (2**(n-1)) + 1
// return n * n + (n - 1) * (n - 1);
// }
// console.log(mySolulion(4));
