import React from "react";
import { useSelector } from "react-redux";

import Container from "../../components/Container";
import Product from "../../components/Product";

function Shoes() {
  const Shoes = useSelector((state) => state.Shoes);
  return (
    <Container>
      {Shoes.map((shoesItem) => (
        <Product
          key={shoesItem.id}
          image={shoesItem.image}
          title={shoesItem.title}
          price={shoesItem.price}
        />
      ))}
    </Container>
  );
}

export default Shoes;
