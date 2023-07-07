import { useEffect, useState } from 'react';
export default function Header({ selectedCategory, setSelectedCategory }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(fetchCategories, []);
  function fetchCategories() {
    setLoading(true);
    setError(null);
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        console.log('fetched categories ->', json);
        setCategories(json);
      })
      .catch((error) => {
        setLoading(false);
        setError(error);
        console.log('error fetching categories ->', error);
      });
  }
  return !loading && !error ? (
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
  ) : loading ? (
    <div>Loading Categories...</div>
  ) : (
    <div>
      Error fetching Categories :
      <span className="error">{error.toString()}</span>
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
