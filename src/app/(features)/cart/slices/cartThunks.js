import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCart, addToCart, updateCartItem, deleteCartItem, clearCart } from '../services/cartService';

// Obtener los elementos del carrito
export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchCart();
      return response.data; // Devuelve el carrito completo
    } catch (error) {
      if (error.response?.status === 404) {
        // Devuelve un carrito vacío si no se encuentra el carrito
        return { items: [] };
      }
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Agregar un producto al carrito
export const addCartItem = createAsyncThunk(
  'cart/addCartItem',
  async (product, { rejectWithValue }) => {
    try {
      const response = await addToCart({ ...product, quantity: product.quantity || 1 });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Actualizar un producto en el carrito
export const updateCartItemThunk = createAsyncThunk(
  'cart/updateCartItem',
  async (product, { rejectWithValue }) => {
    try {
      const response = await updateCartItem(product);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Eliminar un producto del carrito
export const deleteCartItemThunk = createAsyncThunk(
  'cart/deleteCartItem',
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteCartItem(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Limpiar el carrito
export const clearCartThunk = createAsyncThunk(
  'cart/clearCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await clearCart();
      return response.data;
    } catch (error) {
      return rejectWithValue("No se pudo limpiar el carrito");
    }
  }
);