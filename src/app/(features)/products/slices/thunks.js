import { fetchProducts } from "../services/productService";
import { setProducts, startLoadingProducts, setError } from "./productSlice";

export const fetchProductsThunk = (slug='') => async (dispatch) => {
    try {
        dispatch(startLoadingProducts());
        const { data } = await fetchProducts(slug);
        dispatch(setProducts(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}