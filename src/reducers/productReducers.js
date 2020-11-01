import {FETCH_PRODUCTS,
    FILTER_PRODUCTS_BY_SIZE,
    ORDER_PRODUCTS_BY_PRICE,
    ADD_TO_CART,
    REMOVE_FROM_CART
} from "../types";

export const productsReducer = (state = {}, action) =>{
    switch (action.type) {
      case ORDER_PRODUCTS_BY_PRICE:
        console.log( action.payload.items);
        return {
          ...state,
          sort: action.payload.sort,
          filteredItems: action.payload.items,
        };

        case FILTER_PRODUCTS_BY_SIZE:
          return {  
            ...state,
            size: action.payload.size,
            filteredItems: action.payload.items,
          };
        
       case ADD_TO_CART:
          return {
            ...state,
            cartItems: action.payload.items,
          };
       case REMOVE_FROM_CART:
          return {
            ...state,
            cartItems: action.payload.items,
          };
        case FETCH_PRODUCTS:
          
          var data = JSON.parse(localStorage.getItem('cartData'))
          return {
             items: action.payload,
             filteredItems: action.payload,
             cartItems: data

            };
        default:
          return state;
      }
}