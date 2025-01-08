import { createSlice } from '@reduxjs/toolkit';
import { fetchCartItems, addCartItem, deleteCartItemThunk, clearCartThunk, updateCartItemThunk } from './cartThunks';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload.items || [];
        state.error = null;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      })
      .addCase(addCartItem.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.items = action.payload.items; // Sobrescribe el estado con el carrito completo actualizado
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      })
      .addCase(updateCartItemThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(updateCartItemThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.items = action.payload.items; // Sobrescribe el estado con el carrito completo actualizado
      })
      .addCase(updateCartItemThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      })
      .addCase(deleteCartItemThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(deleteCartItemThunk.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.items = action.payload.items;
      })
      .addCase(deleteCartItemThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      })
      .addCase(clearCartThunk.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(clearCartThunk.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
        state.items = [];
      })
      .addCase(clearCartThunk.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Ocurrió un error desconocido.';
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;