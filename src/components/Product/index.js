import PropTypes from "prop-types";
import React from "react";

import "./product.css";

const Product = ({ image, title, price }) => {
  return (
    <div className="productContainer">
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
  image: PropTypes.string,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Product;
