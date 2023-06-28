import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(fetchCategories, []);

  function fetchCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));
  }

  return (
    <div className="App">
      <CategoryList categories={categories} />
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
