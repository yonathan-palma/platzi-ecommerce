import { useState } from 'react';
import { useSingleProduct } from '../../hook/useSingleProdct';
import { NavLink, Navigate } from 'react-router-dom';

//icons
// import { PlusSmall } from '@heroicons/react/24/solid';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/solid';

export function ProductDetail() {
  const [amount, setAmount] = useState(0);
  const { singleProduct, isError } = useSingleProduct();

  if (isError) return <Navigate replace to={'404'} />;
  if (!singleProduct) return null;
  return (
    <div className='min-w-[80%] max-w-2xl lg:max-w-7xl'>
      <div className='flex items-center ml-8'>
        <NavLink to='/' className='h-7 flex items-center'>
          <svg
            className='h-5 w-5'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z'
              clipRule='evenodd'
            />
          </svg>
          Home
        </NavLink>
      </div>
      <div className='w-full mt-6 grid gap-8 grid-cols-1 md:grid-cols-2'>
        <div className='px-20'>
          <figure className='rounded-lg bg-gray-200 hover:opacity-75'>
            <img
              className='h-full w-full rounded-lg object-cover object-center'
              src={singleProduct.image}
              style={{ viewTransitionName: `product-${singleProduct.id}` }}
              alt='Product'
            />
          </figure>
        </div>
        <div className='flex flex-col gap-8'>
          <h1 className='title-view text-6xl font-bold uppercase text-gray-900'>
            {singleProduct.title}
          </h1>
          <p className=' text-gray-500 text-lg leading-7'>
            {singleProduct.description}
          </p>
          <p className='text-3xl font-bold uppercase text-gray-900'>
            ${singleProduct.price}
          </p>
          <div className='grid grid-cols-[40%_1fr] gap-4'>
            <div className=' bg-gray-100 rounded-lg flex items-center justify-between px-2 py-1'>
              <button
                type='button'
                onClick={() =>
                  setAmount((prevState) => (prevState != 0 ? amount - 1 : 0))
                }
              >
                <MinusIcon className='h-6 w-6 text-orange-500 cursor-pointer' />
              </button>
              <div className='item_amount'>{amount}</div>
              <button type='button' onClick={() => setAmount(amount + 1)}>
                <PlusIcon className='h-6 w-6 text-orange-500 cursor-pointer' />
              </button>
            </div>
            <button className=' w-full bg-orange-500 py-3 text-white rounded-lg'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
