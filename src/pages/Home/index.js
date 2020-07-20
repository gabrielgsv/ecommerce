import React from "react";
import { useSelector } from "react-redux";

import Container from "../../components/Container";
import Product from "../../components/Product";

function Home() {
  const Clothings = useSelector((state) => state.Clothing);
  const Shoes = useSelector((state) => state.Shoes);
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

export default Home;
