import PropTypes from "prop-types";
import React from "react";
import { useDispatch } from "react-redux";
import { GoPlus, GoDash } from "react-icons/go";
import { motion } from "framer-motion";

import "./product.css";
import { addToCart, removeByIndex, getById } from "../../store/actions/Cart";
import convertReal from "../../utils/convertReal";

const Product = ({ id, image, title, price, cart, index }) => {
  const dispatch = useDispatch();

  const handleGetById = () => {
    dispatch(getById());
  };

  const handleClick = (cart) => {
    cart
      ? dispatch(removeByIndex(index, () => handleGetById()))
      : dispatch(addToCart(id));
  };

  return (
    <div className="productContainer">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="productImage"
      />
      <motion.div
        className="productAaction"
        whileHover={{scale: 1.2}}
        whileTap={{ rotate: 150 }}
        onClick={() => handleClick(cart)}
      >
        {cart ? (
          <GoDash color="#ffffff" size="14pt" />
        ) : (
          <GoPlus color="#ffffff" size="14pt" />
        )}
      </motion.div>
      <p className="productTitle">{title}</p>
      <p className="productPrice">{convertReal(price)}</p>
    </div>
  );
};

Product.propTypes = {
  cart: PropTypes.any,
  id: PropTypes.number,
  image: PropTypes.string,
  index: PropTypes.any,
  price: PropTypes.number,
  title: PropTypes.string,
};

export default Product;
