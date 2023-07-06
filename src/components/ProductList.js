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
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <p class="product-title">{product.title}</p>
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}
