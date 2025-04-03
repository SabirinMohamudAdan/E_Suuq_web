import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';

function ProductDisplay() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('http://localhost:4002/read/product', {
          category: 'All',
          search: ''
        });
        setProducts(response.data);
      } catch (err) {
        setError('Failed to load products');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="product-container">
      {products.map(product => (
        <AllProducts
          key={product._id}
          id={product._id}
          image={product.image}
          title={product.prName}
          price={product.price}  // Pass the raw price value
          description={product.description}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductDisplay;