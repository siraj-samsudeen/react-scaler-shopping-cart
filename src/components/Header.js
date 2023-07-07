import { useEffect, useState } from 'react';
export default function Header({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(fetchCategories, []);
  function fetchCategories() {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => setCategories(json));
  }
  return (
    <div className="header-items">
      {categories.map((category) => (
        <Category
          key={category}
          category={category}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      ))}
    </div>
  );
}

function Category({ category, selectedCategory, setSelectedCategory }) {
  return (
    <div
      className={
        'header-item ' +
        (category === selectedCategory && 'header-item-selected')
      }
      onClick={() => setSelectedCategory(category)}
    >
      {category}
    </div>
  );
}
