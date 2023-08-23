import { useEffect, useState } from 'react';
import { getProducts } from '../services/getProducts';
import { useParams } from 'react-router-dom';
import useFilters from './useFilters';

export function useSingleProduct() {
  const { id } = useParams();
  const { products } = useFilters();
  const productsFromCache = products.find((elem) => elem.id == id);
  const [singleProduct, setSingleProduct] = useState(productsFromCache);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // console.log(singleProduct);
    // console.log('yolo ');
    // async function fetchData() {
    //   const data = await getProducts(id);
    //   return data;
    // }
    if (!singleProduct) {
      getProducts(id)
        .then((res) => {
          // console.log(res);
          setSingleProduct(res);
          setIsError(false);
        })
        .catch((err) => {
          setIsError(true);
        });
    }
  }, [singleProduct, id]);

  return { singleProduct, isError };
}
