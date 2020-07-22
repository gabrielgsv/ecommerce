import PropTypes from "prop-types";
import React from "react";
import Card from "../../../components/Card";
import { MdModeEdit } from "react-icons/md";
import { FiUser, FiMapPin, FiPhone } from "react-icons/fi";
import Cleave from 'cleave.js/react';
import "cleave.js/dist/addons/cleave-phone.br"

import "./form.css";

const Ship = ({ shipEdit, setShipEdit, handleChange, checkoutData }) => {
  return (
    <Card>
      <div className="formTitle">
        Transporte
        <div className="formEdit" onClick={() => setShipEdit(!shipEdit)}>
          <MdModeEdit />
        </div>
      </div>
      {shipEdit ? (
        <>
          <p className="formContent">
            <FiUser className="formIcon" />
            <input
              className="formInput"
              name="name"
              placeholder="Nome"
              maxLength="50"
              value={checkoutData.name}
              onChange={(e) => handleChange(e)}
              autoFocus
            />
          </p>

          <p className="formContent">
            <FiMapPin className="formIcon" />
            <input
              className="formInput"
              name="address"
              maxLength="50"
              value={checkoutData.address}
              placeholder="Endereço"
              onChange={(e) => handleChange(e)}
            />
          </p>

          <p className="formContent">
            <FiPhone className="formIcon" />
            <Cleave
              className="formInput"
              name="phoneNumber"
              value={checkoutData.phoneNumber}
              maxLength="14"
              placeholder="Telefone"
              onChange={(e) => handleChange(e)}
              options={{phone: true, phoneRegionCode: "br"}}
            />
          </p>
        </>
      ) : (
        <>
          <p className="formContent">
            <FiUser className="formIcon" />
            <span className="formInput">
              {checkoutData.name || "Adicione seu nome"}
            </span>
          </p>

          <p className="formContent">
            <FiMapPin className="formIcon" />
            <span className="formInput">
              {checkoutData.address || "Adicione seu endereço"}
            </span>
          </p>

          <p className="formContent">
            <FiPhone className="formIcon" />
            <span className="formInput">
              {checkoutData.phoneNumber || "Adicione seu número de telefone"}
            </span>
          </p>
        </>
      )}
      {shipEdit && (
        <button className="formButton" onClick={() => setShipEdit(!shipEdit)}>
          Salvar
        </button>
      )}
    </Card>
  );
};

Ship.propTypes = {
  checkoutData: PropTypes.shape({
    address: PropTypes.any,
    name: PropTypes.any,
    phoneNumber: PropTypes.any,
  }),
  handleChange: PropTypes.func,
  setShipEdit: PropTypes.func,
  shipEdit: PropTypes.any,
};

export default Ship;
