import PropTypes from 'prop-types';
import { TrashIcon } from '@heroicons/react/24/outline';

OrderCard.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.array,
  quantity: PropTypes.number,
  handleDelete: PropTypes.func,
  addToCart: PropTypes.func,
};

export function OrderCard({
  title,
  price,
  image,
  quantity,
  handleDelete,
  addToCart,
}) {
  let renderXCircleIcon;
  if (handleDelete) {
    renderXCircleIcon = (
      <TrashIcon className='h-6 w-6 text-black cursor-pointer hover:text-red-600' />
    );
  }
  return (
    <li className='flex justify-between items-center mb-4'>
      <div className='flex items-center gap-2'>
        <figure className=' w-14 h-14'>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={image}
            alt={title}
          />
        </figure>
        <div className='pructDetail'>
          <p className='taxt-sm font-light'>{title}</p>
          <div className='flex text-sm font-light space-x-2'>
            <p>
              <span>$</span>
              {price}
            </p>
            <span>X{quantity}</span>
            <p>
              <span>$</span>
              {price * quantity}
            </p>
            {addToCart && (
              <button
                className='border py-1 px-2 rounded-lg text-orange-500'
                onClick={addToCart}
              >
                +
              </button>
            )}
          </div>
        </div>
      </div>
      <div className='flex items-center gap-2'>
        {/* <p className=' text-lg font-medium'>{price}</p> */}
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          {renderXCircleIcon}
        </button>
      </div>
    </li>
  );
}
