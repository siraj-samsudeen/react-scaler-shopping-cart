import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {/* JS trick  to avoid writing selectedCategory={selectedCategory}, etc */}
      <Header {...{ selectedCategory, setSelectedCategory }} />
      {
        // TODO - Ideally category should never be null, but for the first load it is null
        // moving the check from ProductList to here to avoid the conditional hook error
        selectedCategory && <ProductList {...{ selectedCategory }} />
      }
    </div>
  );
}

export default App;
