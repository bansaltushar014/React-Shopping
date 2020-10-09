import React, { useEffect, useState } from 'react';
import Data from './data.json';
import Product from './components/product.js';
import Cart from './components/cart.js';
import Filter from './components/filter.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      product: Data.products,
      size: '',
      order: '',
      // stopped at the local store
      // console.log(JSON.parse(localStorage.getItem('cartData')));
      addToCardid: []
    }
  }

  componentDidMount() {
    // this.setState({})
    
  }

  removeFromCart = (id) => {
    console.log(id);
    this.setState({addToCardid: [...this.state.addToCardid.filter(data => data._id != id)]}) 
  }

  getAddtoCardId = (id) => {
    let productData = this.state.addToCardid;
    let selectedItem = productData.filter(data => data._id == id)
    if (selectedItem.length) {
      selectedItem[0].count++;
      productData = [...productData.filter(item => item._id !== id), ...selectedItem]
      localStorage.setItem('cartData', JSON.stringify(productData));
      // this.setState({ addToCardid: productData }, () => {
      //   console.log(this.state.addToCardid);
      // });
    } else {
      let insertData = this.state.product.filter(data => data._id == id)
      selectedItem = {
        _id: insertData[0]._id,
        title: insertData[0].title,
        image: insertData[0].image,
        price: insertData[0].price,
        count: '1'
      }
      let newArray = this.state.addToCardid.concat(selectedItem);
      localStorage.setItem('cartData', JSON.stringify(newArray));
      // this.setState({ addToCardid: newArray }, () => {
      //   console.log(this.state.addToCardid);
      // });
    }
    // console.log(this.state.addToCardid);
    // let productData = Data.products.filter(data => data._id == id );

  }

  setfunSize = (e) => {
    let size = e.target.value
    if (size) {
      let productData = Data.products.filter(data => data.availableSizes.includes(size));
      this.setState({ product: productData });
    } else {
      this.setState({ product: Data.products });
    }

  }

  setfunOrder = (e) => {
    console.log(e.target.value);
    let order = e.target.value;
    let sortedData;
    if (order == "Lowest") {
      sortedData = this.state.product.sort(function (a, b) {
        return a.price - b.price
      });
      this.setState({ product: sortedData });
      console.log(sortedData);

    } else {
      sortedData = this.state.product.sort(function (a, b) {
        return b.price - a.price
      });
      console.log(sortedData);
      this.setState({ product: sortedData });
    }
  }


  render() {
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
            <Filter setSize={this.setfunSize}
              setOrder={this.setfunOrder}
              size={this.state.size}
              sort={this.state.order}
              count={this.state.product.length}
            />
            <Product data={this.state.product}
              getAddtoCardId={this.getAddtoCardId}
            />
          </div>
          <div class="col s3">
            <Cart cardItems={this.state.addToCardid}
                  removeFromCart = {this.removeFromCart}
            />
            
          </div>
        </div>
      </div>
    )
  }
}

export default App;
