import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getById } from "../../store/actions/Cart";
import Product from "../../components/Product";
import Prices from "./Prices";
import Form from "./Form";
import emptyImage from "../../images/empty.svg";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Cart.products);

  useEffect(() => {
    dispatch(getById());
  }, [dispatch]);

  return (
    <>
      <div className="containerCart">
        <div className="boxCart">
          {products.length > 0 ? (
            products.map((product, index) => (
                <Product
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={product.price}
                  index={index}
                  cart
                />
            ))
          ) : (
            <div className="cartEmpty">
              <p>Nada no carrinho</p>
              <p>Por favor, adicione produtos</p>
              <img src={emptyImage} alt="empty" width="300px" />
            </div>
          )}
        </div>
        <div className="formContainer">
          <Form />
          <Prices products={products} />
        </div>
      </div>
    </>
  );
};

export default Cart;
