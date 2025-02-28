import React from 'react';
import './App.css';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductData from './ProductData';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="Topbar">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
        </nav>
      </header>
      <div className="MainContainer">
        <ProductDetails data={ProductData} />
      </div>
    </div>
  );
}

export default App;
