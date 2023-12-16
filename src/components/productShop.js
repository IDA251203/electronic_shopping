import React, { useState, useEffect } from 'react';
import Product from './Product';
import styles from './All.module.css';
import data from './products/products.json';
import MainSection from './mainsection';
import Footer from './footer';
import {Link}  from "react-router-dom";
import {Button} from "@material-ui/core";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);

  return (
    <div >

    <MainSection/>

    <div className={styles.shop}>
      <h1>Products</h1>
      <div className={styles.product__cont}>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
        <Link to="/basket" className={styles.nav__link}>
        <Button variant="contained" color="primary"
        sx={{width:'350px',position:'relative',top:'-30px'}}>
          Busket
        </Button>
        </Link>
    </div>

    <Footer/>

    </div>
  );
}

export default Shop;
