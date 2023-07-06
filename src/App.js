import { useState } from 'react';

import './App.css';
import Header from './components/Header';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {/* JS trick  to avoid writing selectedCategory={selectedCategory}, etc */}
      <Header {...{ selectedCategory, setSelectedCategory }} />
    </div>
  );
}

export default App;
