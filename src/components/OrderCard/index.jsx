import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

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
      <XCircleIcon className='h-6 w-6 text-black cursor-pointer' />
    );
  }
  return (
    <div className='flex justify-between items-center mb-2'>
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img
            className='w-full h-full object-cover rounded-lg'
            src={image}
            alt={title}
          />
        </figure>
        <p className='taxt-sm font-light'>{title}</p>
        <p className='taxt-sm font-light'>X{quantity}</p>
        <button className='border p-2 rounded-lg' onClick={addToCart}>
          +
        </button>
      </div>
      <div className='flex items-center gap-2'>
        <p className=' text-lg font-medium'>{price}</p>
        <button
          onClick={() => {
            handleDelete();
          }}
        >
          {renderXCircleIcon}
        </button>
      </div>
    </div>
  );
}
