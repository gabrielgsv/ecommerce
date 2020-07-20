import PropTypes from "prop-types";
import React from "react";

import "./container.css"

const Container = ({ children, style }) => {
  return <div className="pageContainer" style={{...style}}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any
}

export default Container