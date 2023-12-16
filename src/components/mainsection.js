import React from 'react';
import Button from '@mui/material/Button';
import Carousel from 'better-react-carousel';
import styles from './All.module.css';
import data from './products/products.json';

const MainSection = () => {
  const handleButtonClick = () => {
    window.scrollTo({
      top: 600,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.mainsection}>
      <h1>You can find the best quality electronic products from us</h1>
      <Button className={styles.mainsection__button} 
        variant="contained"
        sx={{color:'#fff',
      backgroundColor:'purple',
      boxShadow:'0 0 10px #fff',
      textShadow:'0 0 10px #fff'
      }}
      onClick={handleButtonClick}>
        Next
      </Button>
      <div className={styles.mainsection__carusel}>
        <Carousel cols={4} rows={1} gap={10} loop>
          {data.map((item) => (
            <Carousel.Item key={item.id}>
              <img
                width="270px"
                height="250px"
                src={item.image}
                alt={`Image ${item.id + 1}`}
                className={styles.mainsection__img}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default MainSection;
