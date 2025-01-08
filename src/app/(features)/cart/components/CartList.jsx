import React from "react";
import CartItem from "./CartItem";
import styles from "../cart.module.css";

const CartList = ({ items }) => {
  return (
    <div className={styles.cartList}>
      {(items || []).map((item) => (
        <CartItem key={item.id || item._id} item={item} />
      ))}
    </div>
  );
};

export default CartList;