import { fetchProducts } from "../services/productService";
import { setProducts, startLoadingProducts, setError } from "./productSlice";

export const fetchProductsThunk = (categoryId='') => async (dispatch) => {
    try {
        dispatch(startLoadingProducts());
        const { data } = await fetchProducts(categoryId);
        dispatch(setProducts(data));
    } catch (error) {
        dispatch(setError(error.message));
    }
}