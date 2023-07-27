import { useState, useEffect } from 'react';

//components
import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';

import useFilters from '../../hook/useFilters';
import { getProducts } from '../../services/getProducts';

export function Home() {
  const [products, setProducts] = useState([]);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const { filterProducts, setFilters } = useFilters();

  const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const currentPath = window.location.pathname;
  let index = capitalizarPrimeraLetra(
    currentPath.substring(currentPath.lastIndexOf('/') + 1)
  );

  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  const filteredProducts = filterProducts(products, index);
  // console.log(filteredProducts);

  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className=' font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        className=' rounded-xl border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setFilters(event.target.value)}
        placeholder='Search a product'
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {filteredProducts?.slice(0, 12).map((product) => (
          <Card key={product?.id} data={product} />
        ))}
      </div>
      <ProductDetail
        isProductDetailOpen={isProductDetailOpen}
        setIsProductDetailOpen={setIsProductDetailOpen}
      />
    </>
  );
}