"use client";

import { useSearchParams } from "next/navigation";
import ProductsList from "./components/ProductsList";
import { useProducts } from "./hooks/useProducts";
import { useSelector } from "react-redux";

const ProductsPage = () => {
  const { items } = useSelector((state) => state.cart);
  const searchParams = useSearchParams();
  const slug = searchParams.get('category') || ''; // obtengo el parámetro desde la URL
  const { products, isLoading, error } = useProducts(slug);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && <ProductsList products={products} items={items} />}
    </>
  );
};

export default ProductsPage;
