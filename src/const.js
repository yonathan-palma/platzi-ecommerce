export const menu1 = [
  // {
  //   to: '/',
  //   text: 'Shopi',
  //   className: 'font-semibold text-3xl pr-4 no-underline',
  // },
  {
    to: '/',
    text: 'All',
    className: '',
  },
  {
    to: '/electronics',
    text: 'electronics',
    className: '',
  },
  {
    to: '/jewelery',
    text: 'jewelery',
    className: '',
  },
  {
    to: "/men's clothing",
    text: "men's clothing",
    className: '',
  },
  {
    to: "/women's clothing",
    text: "women's clothing",
    className: '',
  },
];

export const API_PRODUCTS = 'https://api.escuelajs.co/api/v1/products/';
export const FAKE_API = 'https://fakestoreapi.com/products';

export const initialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];
