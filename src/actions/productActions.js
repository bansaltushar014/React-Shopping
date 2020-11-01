import {FETCH_PRODUCTS, FILTER_PRODUCTS_BY_SIZE, ORDER_PRODUCTS_BY_PRICE, ADD_TO_CART, REMOVE_FROM_CART} from "../types";
import Data from '../data.json';

export const fetchProducts = () => async(dispatch) => {
    const res = Data;
    dispatch({
        type: FETCH_PRODUCTS,
        payload: res.products
    });
}

export const filterProducts = (products, size) => (dispatch) => {
  
    dispatch({
      type: FILTER_PRODUCTS_BY_SIZE,
      payload: {
        size: size,
        items:
          size === ""
            ? products
            : products.filter((x) => x.availableSizes.indexOf(size) >= 0),
      },
    });
  };

  export const sortProducts = (filteredProducts, sort) => (dispatch) => {
     
    let order = sort;
      let sortedData;
      if (order == "Lowest") {
        sortedData = filteredProducts.sort(function (a, b) {
          return a.price - b.price
        });
      
      } else {
        sortedData = filteredProducts.sort(function (a, b) {
          return b.price - a.price
        });
    
      }
    
    console.log(sortedData);
    
    dispatch({
      type: ORDER_PRODUCTS_BY_PRICE,
      payload: {
        sort: sort,
        items: sortedData.slice(0,6),
      },
    });
  };

export const getAddtoCardId = (allItems, cartData, id) => async(dispatch)=> {
    let result;
    
    if (typeof(cartData) != "undefined" && cartData !== null &&  cartData.filter(data => data._id == id).length) {
      let selectedItem = cartData.filter(data => data._id == id)
      selectedItem[0].count++;
      result = [...cartData.filter(item => item._id !== id), ...selectedItem]      
      
    } else {      
      let particularData = allItems.filter(data => data._id == id)
      let selectedItem = {
        _id: particularData[0]._id,
        title: particularData[0].title,
        image: particularData[0].image,
        price: particularData[0].price,
        count: '1'
      }

      if(typeof(cartData) == "undefined" || cartData == null)
      cartData = [];

      result = cartData.concat(selectedItem);
    }

    localStorage.setItem('cartData', JSON.stringify(result)); 
    dispatch({
      type: ADD_TO_CART,
      payload: {
        items: result
      },
    });
}

export const removeFromCart = (cartData, id) => async(dispatch) => {
    
  if(typeof(cartData)!= 'undefined' && cartData !== null && cartData.length!=0)
  cartData = [...cartData.filter(data => data._id != id)]

  localStorage.setItem('cartData', JSON.stringify(cartData));
  
  dispatch({
    type: REMOVE_FROM_CART,
    payload: {
      items: cartData
    },
  });
}