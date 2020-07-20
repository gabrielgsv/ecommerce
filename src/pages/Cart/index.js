import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getById } from "../../store/actions/Cart";
import Product from "../../components/Product";
import Form from "./Form";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Cart.products);

  useEffect(() => {
    dispatch(getById());
  }, []);

  return (
    <>
      <div className="containerCart">
        <div className="boxCart">
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
        <div className="formContainer">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Cart;
