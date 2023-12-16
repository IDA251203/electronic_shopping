import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './All.module.css'

const CartMap = ({product}) => {
    const dispatch  = useDispatch()
    
   
    
 
  return (
        <div key={product.id} className={styles.buyproduct}>
           <div className={styles.buyproduct__img}>
            <img src={product.image} width="200" height="162" alt='img'/>
           </div>
           <div className={styles.buyproduct__infobox}>
              <p>{product.name}</p>
              <p>{product.price}$</p>
            </div>
        </div>
  )
}

export default CartMap;
