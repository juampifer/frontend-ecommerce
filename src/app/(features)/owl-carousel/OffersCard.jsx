"use client";
import { useDispatch } from "react-redux";
import styles from "./OffersCard.module.css";
import { addCartItem } from "../cart/slices/cartThunks";
import { showAlert } from "@/app/utils/alertHelper";
const OffersCard = ({ id, name, description, price,offerPrice, image, items }) => {
  const dispatch = useDispatch();

  const handleIncrement = async () => {
    const existingItem = items.find((item) => item.id === id);
    if (!existingItem) {
      try {
        // Llamada asíncrona para agregar el producto al carrito
        await dispatch(addCartItem({ id, name, description, price, image, quantity: 1, offerPrice})).unwrap();
        showAlert('Producto agregado al carrito', `${name}`);
      } catch (error) {
        // Manejo del error si la acción falla
        showAlert('Error al agregar al carrito', `No se pudo agregar ${name}`, 'error');
      }
    }else{
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
          <h5 className={styles.cardOfferPrice}>${offerPrice}</h5>
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

export default OffersCard;