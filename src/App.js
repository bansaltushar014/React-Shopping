import React, { useEffect, useState } from 'react';
import Product from './components/product.js';
import Cart from './components/cart.js';
import Filter from './components/filter.js';
import store from "./store";
import {Provider} from "react-redux";

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <nav>
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">React Shopping Cart</a>
          </div>
        </nav>
        <div class="row">
          <div class="col s9">
            <Filter />
            <Product />
          </div>
          <div class="col s3">
            <Cart />            
          </div>
        </div>
      </div>
    </Provider>
    )
  }
}

export default App;

