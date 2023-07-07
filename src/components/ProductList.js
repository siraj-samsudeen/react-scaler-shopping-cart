import { Product } from './Product';
import useApi from '../hooks/useApi';
import { useParams } from 'react-router';

export default function ProductList({ selectedCategory }) {
  const category = useParams().category || selectedCategory;
  const PRODUCT_URL = `https://fakestoreapi.com/products/category/${category}`;
  const [loading, error, products] = useApi(PRODUCT_URL);
  return !loading && !error ? (
    <div className="products">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </div>
  ) : loading ? (
    <div>Fetching Products...</div>
  ) : (
    <div>
      Error fetching Products :{' '}
      <span className="error">{error.toString()}</span>
    </div>
  );
}
