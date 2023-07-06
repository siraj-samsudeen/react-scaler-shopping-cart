import { useEffect, useState } from 'react';
export default function Header() {
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
        <div className="header-item" key={category}>
          {category}
        </div>
      ))}
    </div>
  );
}
