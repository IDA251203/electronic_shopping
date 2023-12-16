// Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import { deleteFromCart, clearCart } from '../redux/actions/cartActions'; // Update the path to your actions file
import styles from './All.module.css';
import CartMap from './CartMap';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Assuming your cart items are nested under 'items'

  let totalSum = 0;

  for (let i = 0; i < cartItems.length; i++) {
    totalSum += parseFloat(cartItems[i].price);
  }

  const handleButtonClickDelete = () => {
    // Dispatch the deleteFromCart action for each item in the cart
    cartItems.forEach((product) => {
      dispatch(deleteFromCart(product.id));
    });

    // Alternatively, if you want to clear the entire cart
    // dispatch(clearCart());
  };

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      <h3>Total Price: {totalSum}$</h3>
      <div className={styles.product__cont}>
        {cartItems.map((product) => (
          <CartMap key={product.id} product={product} />
        ))}
      </div>

      <Button
        onClick={handleButtonClickDelete}
        variant="contained"
        sx={{color:'#fff',
      backgroundColor:'purple',
      width:'35%',
      borderRadius:'10px',
      height:'45px',
      fontSize:'1.2em',
      boxShadow:'0 0 10px #fff',
      textShadow:'0 0 10px #fff',
      position:'relative',
      top:'30px'
      }}
      >
        Delete
      </Button>
    </div>
  );
};

export default Cart;
