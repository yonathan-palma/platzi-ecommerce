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
    to: '/clothe',
    text: 'clothes',
    className: '',
  },
  {
    to: '/electronics',
    text: 'electronics',
    className: '',
  },
  {
    to: '/furnitures',
    text: 'furnitures',
    className: '',
  },
  {
    to: '/toys',
    text: 'toys',
    className: '',
  },
  {
    to: '/others',
    text: 'others',
    className: '',
  },
];

export const API_PRODUCTS = 'https://api.escuelajs.co/api/v1/products';

export const initialState =
  JSON.parse(window.localStorage.getItem('cart')) || [];
