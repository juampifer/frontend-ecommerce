import React from "react";
import styles from "../cart.module.css";

const CartSummary = ({ itemCount, total }) => {
  return (
    <div className={styles.cartSummary}>
      <div className={styles.cartSummaryRow}>
        <span className={styles.cartSummaryLabel}>Productos:</span>
        <span className={styles.cartSummaryValue}>{itemCount}</span>
      </div>
      <div className={styles.cartSummaryRow}>
        <span className={styles.cartSummaryLabel}>Total:</span>
        <span className={styles.cartSummaryValue}>${total}</span>
      </div>
    </div>
  );
};

export default CartSummary;
