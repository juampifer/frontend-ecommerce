'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../slices/thunks";

export const useProducts = (categoryId = '') => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk(categoryId));
  }, [dispatch, categoryId]); //volver a consultar los productos si cambia la categoria

  return { products, isLoading, error };
};
