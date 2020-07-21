import React from "react";
import { NavLink } from "react-router-dom";

import HeaderMenu from "./HeaderMenu";

import "./header.css";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <div className="headerContainer">
      <img className="headerImage" src={logo} alt="logo website"/>
      <div className="headerLinks">
        <NavLink
          exact
          activeClassName="headerItemActive"
          to="/"
          className="headerItem headerLinks"
        >
          Inicio
        </NavLink>

        <NavLink
          activeClassName="headerItemActive"
          to="/clothing"
          className="headerItem headerLinks"
        >
          Roupas
        </NavLink>

        <NavLink
          activeClassName="headerItemActive"
          to="/shoes"
          className="headerItem headerLinks"
        >
          Calçados
        </NavLink>
      </div>
      <HeaderMenu />
    </div>
  );
};

export default Header;
