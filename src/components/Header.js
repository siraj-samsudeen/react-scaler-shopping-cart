import useApi from '../hooks/useApi';
const CATEGORY_URL = 'https://fakestoreapi.com/products/categories';
export default function Header({ selectedCategory, setSelectedCategory }) {
  const [loading, error, categories] = useApi(CATEGORY_URL);
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
