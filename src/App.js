import React, {useEffect, useState} from 'react';
import Data from './data.json';
import Product from './components/product.js';
import Cart from './components/cart.js';
import Filter from './components/filter.js';

function App() {
  
  const [product, setProduct] = useState('');
  const [order, setOrder] = useState('');
  const [size, setSize] = useState('');

  useEffect(() =>{
     setProduct(Data.products);
  },[]) 

  const setfunSize = (e) => {
    let size = e.target.value
    if(size){
      let productData = Data.products.filter(data => data.availableSizes.includes(size)   );
      setProduct(productData);
    } else {
      setProduct(Data.products);
    }

  }

  const setfunOrder = (e) => {
    console.log(e.target.value);
    let order = e.target.value;
    let sortedData;
    if(order == "Lowest"){
      sortedData = product.sort(function(a,b){
        return a.price-b.price
      });
      console.log(sortedData);
      setProduct(sortedData);
    } else {
      sortedData = product.sort(function(a,b){
        return b.price-a.price
      });
      console.log(sortedData);
      setProduct(sortedData);
    }
  }

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
      <Filter  setSize = {setfunSize} 
               setOrder = {setfunOrder}
               size = {size}
               sort = {order}
               count = {product.length}
      />
      <Product data = {product} />
      </div>
      <div class="col s3">
      <Cart />
      </div>   
    </div>
    </div>
  );
}

export default App;
