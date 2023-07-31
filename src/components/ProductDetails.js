import React from 'react';
import { Link,useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

// Css
import styles from './ProductDetails.module.css'


const ProductDetails = (props) => {

    const params = useParams()
    const id = params.id
    const data = useSelector(state => state.productsState.products) 
    const product = data[id - 1]
    const {image,price,category,description,title} = product

    return ( 
        <div className={styles.container}>
            <img src={image} alt="products" className={styles.image}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}><span>Category : </span>{category}</p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}>{price} $</span>
                      <Link to="/products">BACK to SHOP</Link>
                </div>
            </div>
        </div>
     );
}
 
export default ProductDetails;