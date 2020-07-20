import React from "react";
import { useSelector } from "react-redux";

import Container from "../../components/Container";
import Product from "../../components/Product";

function Clothing() {
  const Clothings = useSelector((state) => state.Clothing);
  return (
    <Container>
      {Clothings.map((clothing) => (
        <Product
          key={clothing.id}
          image={clothing.image}
          title={clothing.title}
          price={clothing.price}
        />
      ))}
    </Container>
  );
}

export default Clothing;
