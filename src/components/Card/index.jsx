import PropTypes from 'prop-types';

import { PlusIcon, CheckIcon } from '@heroicons/react/24/solid';
import { useCart } from '../../hook/useCart';
import { useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

Card.propTypes = {
  data: PropTypes.object,
};

export function Card({ data }) {
  // tambien para la animacion a partir de punto
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // useEffect(() => {
  //   const handleMove = (event) => {
  //     const { clientX, clientY } = event;
  //     setPosition({ x: clientX, y: clientY });
  //   };
  //   window.addEventListener('click', handleMove);
  // }, []);

  const { id, title, category, price, image } = data;
  const { cart, addToCart, isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen } =
    useCart();

  const isInCart = cart.some((product) => product.id == id);

  const addProductToCart = (productData) => {
    if (!isInCart) {
      addToCart(productData);
      !isCheckoutSideMenuOpen && setIsCheckoutSideMenuOpen(true);
    }
  };
  const navigate = useNavigate();

  const viewNavigate = (e, id) => {
    // Navigate to the new route
    if (!document.startViewTransition) {
      return navigate(`product/${id}`);
    } else {
      // animacion a partir de un punto
      // const endRadius = Math.hypot(
      //   Math.max(position.x, innerWidth - position.x),
      //   Math.max(position.y, innerHeight - position.y)
      // );

      // const transition = document.startViewTransition(() => {
      //   navigate(`product/${id}`);
      // });
      // console.log(endRadius);

      // transition.ready.then(() => {
      //   // Animate the root's new view
      //   document.documentElement.animate(
      //     {
      //       clipPath: [
      //         `circle(0 at ${position.x}px ${position.y}px)`,
      //         `circle(${endRadius}px at ${position.x}px ${position.y}px)`,
      //       ],
      //     },
      //     {
      //       duration: 500,
      //       easing: 'ease-in',
      //       // Specify which pseudo-element to animate
      //       pseudoElement: '::view-transition-new(root)',
      //     }
      //   );
      // });

      // transition simple de desplazamiento
      e.target.style.viewTransitionName = `product-${id}`;
      e.target.style.animation = 'none';
      e.target.style.mixBlendMode = 'normal';

      return document.startViewTransition(() => {
        e.target.style.viewTransitionName = '';
        flushSync(() => {
          navigate(`product/${id}`);
        });
      });
    }
  };

  return (
    <div className='group relative'>
      <figure className='cursor-pointer aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
        {/* <NavLink to={`product/${id}`}> */}
        <img
          className=' h-full w-full object-cover object-center lg:h-full lg:w-full'
          // style={{ viewTransitionName: `product-${id}` }}
          src={image}
          onClick={(e) => viewNavigate(e, id)}
          alt='heagPhone'
        />
        {/* </NavLink> */}
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
          <h3
            // style={{ viewTransitionName: `product-${id}` }}
            className='text-sm text-gray-700'
          >
            {title}
          </h3>
          <p className='mt-1 text-sm text-gray-500'>{category}</p>
        </div>
        <p className='text-sm font-medium text-gray-900'>{`$${price}`}</p>
      </div>
    </div>
  );
}
