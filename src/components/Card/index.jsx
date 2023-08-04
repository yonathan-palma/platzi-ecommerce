import PropTypes from 'prop-types';

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../hook/useCart';

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
  const { cart, addToCart, isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen } =
    useCart();

  const isInCart = cart.some((product) => product.id == id);

  const addProductToCart = (productData) => {
    if (!isInCart) {
      addToCart(productData);
      !isCheckoutSideMenuOpen && setIsCheckoutSideMenuOpen(true);
      // closeProductDetail();
    }
  };

  return (
    <div className='group relative'>
      <figure className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        <img
          className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          // onClick={() => showProduct(data)}
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
        </button>
      </figure>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-sm text-gray-700'>
            {/* <a href={product.href}> */}
            <span aria-hidden='true' className='absolute inset-0' />
            {title}
            {/* </a> */}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{category.name}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{price}</p>
      </div>
    </div>
  );
}
