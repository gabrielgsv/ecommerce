import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";

import "./product.css";
import { addToCart } from "../../store/actions/Cart";

const Product = ({ id, image, title, price }) => {
  const dispatch = useDispatch();
  return (
    <div className="productContainer" onClick={() => dispatch(addToCart(id))}>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="productImage"
      />
      <p className="productTitle">{title}</p>
      <p className="productPrice">R$ {price}</p>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string
};

export default Product;
