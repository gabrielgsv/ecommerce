import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import convertReal from "../../../utils/convertReal";
import { removeAllProducts } from "../../../store/actions/Cart";
import "./prices.css";

const Prices = ({ products }) => {
  const dispatch = useDispatch();
  const [subTotal, setSubTotal] = useState(0);
  const frete = 0;
  const checkout = useSelector((state) => state.Checkout);

  useEffect(() => {
    if (products.length > 0) {
      const value = products.reduce((a, b) => ({price: a.price + b.price}))
      setSubTotal(value.price);
    } else {
      setSubTotal(0);
    }
  }, [products]);

  return (
    <>
      <div className="priceContainer">
        <p className="priceNumbers">Subtotal: </p>
        <p className="priceNumbers">{convertReal(subTotal)}</p>
        <p className="priceNumbers">Frete:</p>
        <p className="priceNumbers">Grátis</p>
        <p className="priceNumbers">Total: </p>
        <p className="priceNumbers">{convertReal(subTotal + frete)}</p>
      </div>

      {products.length > 0 &&
      !Object.values(checkout).some((o) => o === "" || undefined || null) ? (
        <Link to="/finish" onClick={() => dispatch(removeAllProducts())}>
          <button className="priceButton">CONFIRMAR COMPRA</button>
        </Link>
      ) : (
        <button className="priceButton" disabled>
          CONFIRMAR COMPRA
        </button>
      )}
    </>
  );
};

Prices.propTypes = {
  products: PropTypes.any,
};

export default Prices;
