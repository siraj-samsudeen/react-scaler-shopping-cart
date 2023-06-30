import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [categories, setCategories] = useState([]);
  const products = [
    {
      id: 5,
      title: 'WD 2TB Elements Portable External Hard Drive - USB 3.0',
      price: '12',
      image: 'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    },
    {
      id: 8,
      title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
      price: '23',
      image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    },
  ];

  useEffect(fetchCategories, []);

  function fetchCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  return (
    <div className="App">
      <CategoryList categories={categories} />
      <ProductList products={products} />
    </div>
  );
}

function CategoryList({ categories }) {
  // TODO first category is NOT highlighted on first render
  // because setSelectedCategory is not yet executed
  // I know why this is happening - what is the right way to handle this?
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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