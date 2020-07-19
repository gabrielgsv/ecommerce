import PropTypes from "prop-types";
import React from "react";
import { FaUser, FaShoppingCart, FaHome, FaTag } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./sidebar.css";

const Sidebar = ({ handleClick }) => {
  return (
    <div className="sidebarList">
      <div className="sidebarItem" onClick={() => handleClick()}>
        <FaUser style={{ marginRight: 7 }} /> Conta
      </div>

      <div className="sidebarItem" onClick={() => handleClick()}>
        <FaShoppingCart style={{ marginRight: 7 }} /> Carrinho
      </div>

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
