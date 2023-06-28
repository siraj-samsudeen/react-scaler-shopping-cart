import { useState } from 'react';
import './App.css';

export default function App() {
  const categories = [
    'electronics',
    'jewelery',
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div className="App">
      <CategoryList categories={categories} />
    </div>
  );
}

function CategoryList({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

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
