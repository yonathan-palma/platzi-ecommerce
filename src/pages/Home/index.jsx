import { useContext } from 'react';
import { CartContext } from '../../context';

import { Card } from '../../components/Card';
import { ProductDetail } from '../../components/ProductDetail';
// import { CheckoutSideMenu } from '../../components/CheckoutSideMenu';

export function Home() {
  // const [products, setProducts] = useState([]);
  const { products, searchByTitle, setSearchByTitle, filteredProducts } =
    useContext(CartContext);

  const capitalizarPrimeraLetra = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const currentPath = window.location.pathname;
  let index = capitalizarPrimeraLetra(
    currentPath.substring(currentPath.lastIndexOf('/') + 1)
  );

  const renderView = () => {
    if (searchByTitle?.length > 0) {
      if (filteredProducts?.length > 0) {
        return filteredProducts?.slice(0, 12).map((product) => (
          // <Cart key={product.id} data={product} />
          <Card key={product?.id} data={product} />
        ));
      } else {
        return <div>We don&lsquo;t have anything:</div>;
      }
    } else {
      if (index) {
        console.log('index');
        return products
          ?.filter((item) => item.category.name === index)
          .map((item) => <Card key={item.id} data={item} />);
      } else {
        return products
          ?.slice(0, 12)
          .map((product) => <Card key={product?.id} data={product} />);
      }
    }
  };

  return (
    <>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className=' font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input
        type='text'
        className=' rounded-xl border border-black w-80 p-4 mb-4 focus:outline-none'
        onChange={(event) => setSearchByTitle(event.target.value)}
        placeholder='Search a product'
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
      {/* <CheckoutSideMenu /> */}
    </>
  );
}
