import React from "react";
import ProductsCard from "./ProductsCard";

const ProductsList = ({ products, items }) => {
  const filteredProducts = products.filter((product) => !product.offerPrice);
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-2">
      {filteredProducts.map((product) => (
        <ProductsCard
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.description}
          price={product.price}
          image={product.image}
          items={items}
        />
      ))}
    </div>
  );
};

export default ProductsList;
