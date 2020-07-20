import PropTypes from "prop-types";
import React from "react";

import "./container.css"

const Container = ({ children }) => {
  return <div className="pageContainer">{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any
}

export default Container