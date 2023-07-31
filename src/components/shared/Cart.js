import React from "react";
import { useDispatch } from "react-redux";

// Css
import styles from "./Cart.module.css";

// Functions
import { shorten } from "../../helper/function";

// Icons
import trashIcon from "../../assets/icons/trash.svg";

// Actions
import { increase, decrease, removeItem } from "../../redux/cart/cartAction";

const Cart = (props) => {
  const { image, price, title, quantity } = props.data;

  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <img src={image} alt="Product" className={styles.productImage} />
      <div className={styles.data}>
        <h3>{shorten(title)}</h3>
        <p>{price} $ </p>
      </div>
      <div>
        <span className={styles.quantity}>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button onClick={() => dispatch(decrease(props.data))}> - </button>
        ) : (
          <button onClick={() => dispatch(removeItem(props.data))}>
            <img src={trashIcon} alt="trash" style={{ width: "20px" }} />
          </button>
        )}
        <button onClick={() => dispatch(increase(props.data))}> + </button>
      </div>
    </div>
  );
};

export default Cart;
