import { Product } from './Product';
import useApi from '../hooks/useApi';

export default function ProductList({ selectedCategory }) {
  // TODO - Ideally category should never be null, but for the first load it is null
  // If I uncomment this, I get the error regarding conditional hook,
  // but if I comment a call is made to the API with null category
  // if (!selectedCategory) return;

  const PRODUCT_URL = `https://fakestoreapi.com/products/category/${selectedCategory}`;
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
