import PropTypes from "prop-types";
import React from "react"

import "./card.css"

const Card = ({children}) => {
  return (
    <div className="card">
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any
}

export default Card