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
      <ProductList {...{ selectedCategory }} />
    </div>
  );
}

export default App;
