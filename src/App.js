import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [categories, setCategories] = useState([]);
  // TODO first category is NOT highlighted on first render
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(fetchCategories, []);
  useEffect(() => fetchProductsOf(selectedCategory), [selectedCategory]);

  function fetchCategories() {
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        return setCategories(data);
      })
      .catch((error) => {
        setLoading(false);
        setError('Error => ' + error.message);
        console.error('Error => ', error.message);
      });
  }
  function fetchProductsOf(category) {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }

  return (
    <div className="App">
      {loading ? (
        'Fetching categories...'
      ) : error ? (
        error.toString()
      ) : (
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <ProductList products={products} />
    </div>
  );
}

function CategoryList({ categories, selectedCategory, setSelectedCategory }) {
  console.log('CategoryList => ', categories);
  console.log('selected category ', selectedCategory);

  return (
    <div className="category-list">
      {categories.map((category) => (
        <div
          className={
            'category ' + (category === selectedCategory && 'category-selected')
          }
          key={category}
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
}

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <div>{product.title}</div>
          <span className="product-price">Rs. {product.price}</span>
        </div>
      ))}
    </div>
  );
}
