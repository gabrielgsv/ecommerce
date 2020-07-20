import PropTypes from "prop-types";
import React from "react";
import { FaShoppingCart, FaHome, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ handleClick }) => {
  return (
    <div className="sidebarList">
      <Link to="/cart" className="sidebarItem" onClick={() => handleClick()}>
        <FaShoppingCart style={{ marginRight: 7 }} /> Carrinho
      </Link>

      <Link
        to="/"
        className="sidebarItem sidebarNotMobile"
        onClick={() => handleClick()}
      >
        <FaHome style={{ marginRight: 7 }} /> Inicio
      </Link>

      <Link
        to="/clothing"
        className="sidebarItem sidebarNotMobile"
        onClick={() => handleClick()}
      >
        <FaTag style={{ marginRight: 7 }} /> Roupas
      </Link>
      <Link
        to="/shoes"
        className="sidebarItem sidebarNotMobile"
        onClick={() => handleClick()}
      >
        <FaTag style={{ marginRight: 7 }} /> Calçados
      </Link>
    </div>
  );
};

Sidebar.propTypes = {
  handleClick: PropTypes.func,
};

export default Sidebar;
