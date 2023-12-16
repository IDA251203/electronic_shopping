// cartReducer.js

import { ADD_TO_CART, DELETE_FROM_CART, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  items: [], // Your cart items go here
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Handle adding item to cart
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case DELETE_FROM_CART:
      // Handle deleting item from cart
      const updatedItems = state.items.filter((item) => item.id !== action.payload);
      return {
        ...state,
        items: updatedItems,
      };

    case CLEAR_CART:
      // Handle clearing the entire cart
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};

export default cartReducer;
