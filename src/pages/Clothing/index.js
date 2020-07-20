import React from "react";
import { useSelector } from "react-redux";

import Container from "../../components/Container";
import Product from "../../components/Product";

function Clothing() {
  const Products = useSelector((state) => state.Products);
  return (
    <Container>
      {Products.map(
        (product) =>
          product.category === "clothing" && (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          )
      )}
    </Container>
  );
}

export default Clothing;
