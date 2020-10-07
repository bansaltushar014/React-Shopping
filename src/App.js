import React from 'react';
import Data from './data.json';
import Product from './components/product.js';
import Cart from './components/cart.js';

function App() {
  return (
    <div className="App">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">React Shopping Cart</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
            <li><a href="collapsible.html">JavaScript</a></li>
          </ul>
        </div>
      </nav>
      <div class="row">
      <div class="col s9">
      <Product data = {Data} />
      </div>
      <div class="col s3">
      <Cart />
      </div>
    
    
    </div>
    </div>
  );
}

export default App;
