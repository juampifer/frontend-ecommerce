"use client";
import { showAlert } from "@/app/utils/alertHelper";
import { addCartItem, fetchCartItems } from "../../cart/slices/cartThunks";
import styles from "./ProductsCard.module.css";
import { useDispatch } from "react-redux";

const ProductsCard = ({ id, name, description, price, image, items }) => {
  const dispatch = useDispatch();

  const handleIncrement = async () => {
    const existingItem = items.find((item) => item.id === id);
    if (!existingItem) {
      try {
        // Llamada asíncrona para agregar el producto al carrito
        await dispatch(addCartItem({ id, name, description, price, image, quantity: 1})).unwrap();
        showAlert('Producto agregado al carrito', `${name}`);
      } catch (error) {
        // Manejo del error si la acción falla
        showAlert('Error al agregar al carrito', `No se pudo agregar ${name}`, 'error');
      }
    } else {
      showAlert(`Si desea agregar más ${name}`, `Debe hacerlo desde el carrito de compras`);
    }
  };
  return (
    <div className={styles.cardContainer}>
      <img className={styles.cardImg} src={image} alt={name} />
      <div className={styles.infoContainer}>
        <h5 className={styles.cardTitle}>{name}</h5>
        <p className={styles.cardInfo}>{description}</p>
        <div className={styles.priceAndButton}>
          <p className={styles.cardPrice}>${price}</p>
          <button
            className={styles.cardButton}
            onClick={handleIncrement}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
