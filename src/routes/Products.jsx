import { useState, useEffect } from 'react';

const getProducts = () => {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
      .then((response) => {
        if (!response.ok) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((response) => setProducts(response))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { products, error, loading };
};

const Products = () => {
  const { products, error, loading } = getProducts();
  return (
    <div className="px-4 py-2">
      <h1 className="">Explore our Collection</h1>
    </div>
  );
};

export default Products;
