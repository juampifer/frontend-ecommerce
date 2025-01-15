'use client';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsThunk } from "../slices/thunks";

export const useProducts = (slug = '') => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsThunk(slug));
  }, [dispatch, slug]); //volver a consultar los productos si cambia la categoria

  return { products, isLoading, error };
};
