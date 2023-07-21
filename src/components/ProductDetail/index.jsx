import { XCircleIcon } from '@heroicons/react/24/solid';
import { useContext } from 'react';
import { CartContext } from '../../context';

export function ProductDetail() {
  const { isProductDetailOpen, closeProductDetail, productToshow } =
    useContext(CartContext);
  // console.log(productToshow);
  return (
    <aside
      className={`${
        isProductDetailOpen ? 'flex' : 'hidden'
      } w-[360px] h-[calc(100vh-70px)] flex-col fixed bg-white right-0 top-[68px] border border-black rounded-lg`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className=' font-medium text-xl'>Detail</h2>
        <div>
          <button onClick={() => closeProductDetail()}>
            <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
          </button>
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full rounded-lg'
          src={productToshow.images[0]}
          alt={productToshow.title}
        />
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl'>{productToshow.price}</span>
          <span className='font-medium text-md'>{productToshow.title}</span>
          <span className='font-light text-sm'>
            {productToshow?.description}
          </span>
        </p>
      </figure>
    </aside>
  );
}
