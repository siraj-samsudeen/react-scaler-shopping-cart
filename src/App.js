import { useState } from 'react';

import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { Routes, Route } from 'react-router-dom';
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {/* JS trick  to avoid writing selectedCategory={selectedCategory}, etc */}
      <Header {...{ selectedCategory, setSelectedCategory }} />
      <Routes>
        <Route path="/" element={<ProductList {...{ selectedCategory }} />} />
        <Route path="/categories/:category" element={<ProductList />} />
      </Routes>
    </div>
  );
}

export default App;
