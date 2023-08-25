import { useState, useEffect } from 'react';

//components
import { Card } from '../../components/Card';

import useFilters from '../../hook/useFilters';
import { getProducts } from '../../services/getProducts';
import { Pagination } from '../../components/Pagination';
import { Skeletor } from '../../components/Skeletor';

export function Home() {
  const { filterProducts, setFilters, products, setProducts } = useFilters();
  const [loading, setLoading] = useState(true);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(1);

  // const capitalizarPrimeraLetra = (str) => {
  //   return str.charAt(0).toUpperCase() + str.slice(1);
  // };

  const currentPath = window.location.pathname;
  // let index = capitalizarPrimeraLetra(
  //   currentPath.substring(currentPath.lastIndexOf('/') + 1)
  // );
  let index = decodeURI(
    currentPath.substring(currentPath.lastIndexOf('/') + 1)
  );

  useEffect(() => {
    // if (products.length !== 0) return false;
    getProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, [setProducts, setLoading]);
  console.log(loading);
  console.log(products.length);
  const filteredProducts = filterProducts(products, index);

  const lastIndex = currentPage * productsPerPage;
  const firstIndex = lastIndex - productsPerPage;

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
      <div className='mx-auto min-w-[80%] max-w-2xl px-4 py-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8'>
        {filteredProducts.length == 0 && !loading && (
          <h2>lo sentimos lo que estas buscando no se encuentra disponible</h2>
        )}
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {filteredProducts?.slice(firstIndex, lastIndex).map((product) => (
            <Card key={product?.id} data={product} />
          ))}
          {loading && products.length == 0 && <Skeletor />}
        </div>
        <Pagination
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalProducts={filteredProducts.length}
        />
      </div>
    </>
  );
}
