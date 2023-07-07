import { Product } from './Product';
import { useEffect, useState } from 'react';
export default function ProductList({ selectedCategory }) {
  const [products, setProducts] = useState([]);

  useEffect(() => fetchProducts(selectedCategory), [selectedCategory]);
  function fetchProducts(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }
  return (
    <div className="products">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  );
}
