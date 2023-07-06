import { useEffect, useState } from 'react';
export default function Header() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(fetchCategories, []);
  function fetchCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }
  return (
    <div className="header-items">
      {categories.map((category) => (
        <div
          className={
            'header-item ' +
            (category === selectedCategory && 'header-item-selected')
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
