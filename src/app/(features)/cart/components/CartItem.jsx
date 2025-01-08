import React from "react";
import styles from "../cart.module.css";
import { useDispatch } from "react-redux";
import { addCartItem, deleteCartItemThunk, updateCartItemThunk } from "../slices/cartThunks";
import { showAlert, showConfirm } from "@/app/utils/alertHelper";
import { BiTrash } from "react-icons/bi";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrement = async () => {
    try {
      await dispatch(
        updateCartItemThunk({ ...item, quantity: item.quantity + 1 })
      ).unwrap();
      showAlert("Cantidad actualizada", `${item.name}: ${item.quantity + 1}`);
    } catch (error) {
      showAlert(
        "Error al actualizar la cantidad",
        `No se pudo agregar ${item.name}: ${error.message || error}`,
        "error"
      );
    }
  };

  const handleDecrement = async () => {
    if (item.quantity > 1) {
      try {
        await dispatch(
          updateCartItemThunk({ ...item, quantity: item.quantity - 1 })
        ).unwrap();
        showAlert("Cantidad actualizada", `${item.name}: ${item.quantity - 1}`);
      } catch (error) {
        showAlert(
          "Error al actualizar la cantidad",
          `No se pudo quitar ${item.name}: ${error.message || error}`,
          "error"
        );
      }
    } else {
      showAlert(
        "Operación inválida",
        "No puedes tener menos de 1 unidad.",
        "error"
      );
    }
  };

  const handleRemove = async () => {
    const confirmed = await showConfirm(
      "¿Eliminar producto?",
      `¿Estás seguro de eliminar ${item.name} del carrito?`,
      "warning"
    );
    if (confirmed) {
      try {
        await dispatch(deleteCartItemThunk(item.id || item._id)).unwrap();
        showAlert(
          "Eliminado",
          `${item.name} fue eliminado del carrito.`,
          "info"
        );
      } catch (error) {
        showAlert(
          "Error al eliminar el producto",
          `No se pudo quitar ${item.name}: ${error.message || error}`,
          "error"
        );
      }
    }
  };

  return (
    <div className={styles.cartItem}>
      <img src={item.image} alt={item.name} />
      <div className="flex-1">
        <h4 className="text-lg font-bold">{item.name}</h4>
        {item.offerPrice ? (
          <>
            <p className="text-sm text-gray-600 line-through">${item.price}</p>
            <p className="text-sm text-gray-600">${item.offerPrice}</p>
          </>
        ) : (
          <p className="text-sm text-gray-600">${item.price}</p>
        )}
      </div>
      <div className={styles.quantityControl}>
        <button onClick={handleDecrement}>-</button>
        <span className="font-semibold">{item.quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <div>
        <button onClick={handleRemove} className="text-red-500">
          <BiTrash className={styles.trashIcon} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
