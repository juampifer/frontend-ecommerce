import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/cart`;

/**
 * Obtiene el carrito del usuario autenticado o anónimo.
 */
export const fetchCart = async () => {
  const response = await axios.get(API_URL, { withCredentials: true });
  return response.data;
};

/**
 * Agrega un producto al carrito.
 * @param {Object} product - Detalles del producto a agregar.
 */
export const addToCart = async (product) => {
  const response = await axios.post(API_URL, product, { withCredentials: true });
  return response.data;
};

/**
 * Actualiza un producto en el carrito.
 * @param {Object} product - Detalles del producto actualizado.
 */
export const updateCartItem = async (product) => {
  const response = await axios.put(API_URL, product, { withCredentials: true });
  return response.data;
};

/**
 * Elimina un producto del carrito.
 * @param {string} id - ID del producto a eliminar.
 */
export const deleteCartItem = async (id) => {
  const response = await axios.delete(API_URL, {
    data: { id },
    withCredentials: true,
  });
  return response.data;
};

/**
 * Limpia el carrito.
 */
export const clearCart = async () => {
  try {
    const response = await axios.delete(`${API_URL}/clearCart`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('Error al limpiar el carrito:', error);
    throw error;
  }
};