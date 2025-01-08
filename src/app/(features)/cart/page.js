"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCartThunk, fetchCartItems } from "./slices/cartThunks";
import CartList from "./components/CartList";
import styles from "./cart.module.css";
import CartSummary from "./components/CartSummary";
import { showAlert, showConfirm } from "@/app/utils/alertHelper";
import { clearCart } from "./slices/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.cart);
  // Total de ítems del carrito
  const totalItems = (items || []).reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
// Precio total de la compra
  const totalAmount = (items || []).reduce(
    (total, item) =>
      total + (item.quantity || 0) * (item.offerPrice || item.price || 0),
    0
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCartItems());
    }
  }, [dispatch, status]);

  const handleCheckout = async () => {
    if (!items.length) {
      showAlert("Carrito vacío", "Agrega productos antes de pagar.", "error");
      return;
    }

    const confirmed = await showConfirm(
      "¿Confirmar compra?",
      "¿Estás seguro de proceder con el pago?",
      "question"
    );
    if (confirmed) {
      try {
        await dispatch(clearCartThunk()).unwrap();
        dispatch(clearCart());
        showAlert("Compra realizada", "Gracias por tu compra.");
      } catch (error) {
        showAlert(
          "Error",
          `Hubo un problema al procesar tu compra: ${error.message || error}`,
          "error"
        );
      }
    }
  };

  if (status === "idle" || status === "loading") return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={styles.cartPage}>
      <h1 className={styles.cartTitle}>Carrito</h1>
      {items.length ? (
        <>
          <CartList items={items} />
          <CartSummary itemCount={totalItems} total={totalAmount} />
          <button className={styles.payButton} onClick={handleCheckout}>
            Pagar
          </button>
        </>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default CartPage;
