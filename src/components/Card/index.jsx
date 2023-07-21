import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CartContext } from '../../context';

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';

Card.propTypes = {
  // title: PropTypes.string,
  // category: PropTypes.object,
  // price: PropTypes.number,
  // image: PropTypes.array,
  // description: PropTypes.string,
  data: PropTypes.object,
};

export function Card({ data }) {
  const { id, title, category, price, images } = data;
  // console.log(images);
  const {
    count,
    setCount,
    openProductDetail,
    setIsProductToshow,
    cartProducts,
    setCartProducts,
    OpenCheckoutSideMenu,
    closeProductDetail,
  } = useContext(CartContext);

  const showProduct = (ProductDetail) => {
    openProductDetail();
    setIsProductToshow(ProductDetail);
  };

  const isInCart = cartProducts.some((product) => product.id == id);

  const addProductToCart = (productData) => {
    // const newProduct
    if (!isInCart) {
      setCartProducts([...cartProducts, productData]);
      setCount(count + 1);
      closeProductDetail();
      OpenCheckoutSideMenu();
    }
  };

  return (
    <div className=' bg-white cursor-pointer w-56 h-60 rounded-lg'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
          {category.name}
        </span>
        <img
          className=' w-full h-full object-cover rounded-lg'
          onClick={() => showProduct(data)}
          src={images[0]}
          alt='heagPhone'
        />
        <button
          className=' absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={() => addProductToCart(data)}
        >
          {isInCart ? (
            <CheckIcon className='h-6 w-6 text-black cursor-pointer' />
          ) : (
            <PlusIcon className='h-6 w-6 text-black cursor-pointer' />
          )}
          {/* <PlusIcon className='h-6 w-6 text-black cursor-pointer' /> */}
        </button>
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-lg font-medium'>{price}</span>
      </p>
    </div>
  );
}
