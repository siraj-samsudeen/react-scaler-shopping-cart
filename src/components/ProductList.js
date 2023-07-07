import { Product } from './Product';
import { useEffect, useState } from 'react';
export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => fetchProducts(selectedCategory), [selectedCategory]);
  function fetchProducts(category) {
    // TODO - Ideally category should never be null, but for the first load it is null
    if (!category) return;

    setLoading(true);
    setError(null);
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        console.log('fetched products ->', json);
        setProducts(json);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log('error fetching products ->', error);
      });
  }
  return !loading && !error ? (
    <div className="products">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  ) : loading ? (
    <div>Fetching Products...</div>
  ) : (
    <div>
      Error fetching Products :{' '}
      <span className="error">{error.toString()}</span>
    </div>
  );
}
