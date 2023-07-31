import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

// Components
import Cart from './shared/Cart';

// Css
import styles from './ShopCart.module.css'

// Actions
import { clear,checkout } from '../redux/cart/cartAction';


const ShopCart = () => {


    const state = useSelector(state => state.cartState)
    const dispatch =useDispatch()


    return ( 
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map(item => <Cart key={item.id} data={item}/>)}
            </div>
            {
                state.itemsCounter > 0 && <div className={styles.payments}>
                    <p><span>Total items:</span>{state.itemsCounter}</p>
                    <p><span>Total Payments:</span>{state.total}</p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.checkout} onClick={() => dispatch(checkout())}> Check Out </button>
                        <button className={styles.clear} onClick={() => dispatch(clear())}> Clear </button>
                    </div>
                </div>
            }

            {
                state.itemsCounter === 0 && !state.checkout && <div className={styles.complete}>
                    <h3>Want to Buy</h3>
                    <Link to="/products">Go to Shop</Link>
                </div>
            }

            {
                state.checkout && <div className={styles.complete}>
                    <h3>Check Out Succsessfuly</h3>
                    <Link to="/products">Buy More</Link>
                </div>
            }

            
        </div>
     );
}
 
export default ShopCart;