import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        offerProducts: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        startLoadingProducts: (state, /* action */ ) => {
            state.isLoading = true;
        },
        setProducts: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
            state.offerProducts = action.payload.filter(product => product.offerPrice); // Filtrado al momento de cargar
            state.error = null; //Limpiar errores en caso de éxito
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        setOfferProducts: (state) => {
            state.offerProducts = state.products.filter(product => product.offerPrice);
        },
    }
});
// Action creators are generated for each case reducer function
export const { startLoadingProducts, setProducts, setError } = productsSlice.actions;