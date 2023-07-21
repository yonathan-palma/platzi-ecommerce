import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';

OrderCard.propTypes = {
  title: PropTypes.string,
  // id: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.array,
  handleDelete: PropTypes.func,
};

export function OrderCard({ title, price, image, handleDelete }) {
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
