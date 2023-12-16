import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/cartActions'
import styles from './All.module.css'
import Button from '@mui/material/Button';

const Product = ({product}) => {
    const dispatch  = useDispatch()
    
    const handleAddToCart = () =>{
        dispatch(addToCart(product))
    }
     

  return (
    <div className={styles.product}>
      <div className={styles.product__imgbox}>
        <img src={product.image} width="200" height="162" alt='img'/>
      </div>
      <div className={styles.product__infobox}>
      <h3 >{product.name}</h3>
      <p>{product.information}</p>
      <p>{product.price}$</p>
      
      <Button variant="contained" 
      onClick={handleAddToCart}
      sx={{
        backgroundColor:'purple',
        boxShadow:'0 0 10px #fff'
      }}
      >Add</Button>
      </div>
    </div> 
  )
}

export default Product;
