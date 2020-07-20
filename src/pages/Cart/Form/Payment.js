import PropTypes from "prop-types";
import React from "react";
import Card from "../../../components/Card";
import { MdModeEdit } from "react-icons/md";
import { FiCreditCard, FiCalendar, FiLock } from "react-icons/fi";
import Cleave from "cleave.js/react";

import "./form.css";

const Payment = ({ payEdit, setPayEdit, handleChange, checkoutData }) => {
  return (
    <Card>
      <div className="formTitle">
        Pagamento{" "}
        <div className="formEdit" onClick={() => setPayEdit(!payEdit)}>
          <MdModeEdit />
        </div>
      </div>
      {payEdit ? (
        <>
          <p className="formContent">
            <FiCreditCard className="formIcon" />
            <Cleave
              className="formInput"
              name="cardNumber"
              value={checkoutData.cardNumber}
              placeholder="Numero do cartão"
              onChange={(e) => handleChange(e)}
              options={{ creditCard: true }}
            />
          </p>
          <p className="formContent">
            <FiCalendar className="formIcon" />
            <Cleave
              className="formInput"
              name="cardDate"
              value={checkoutData.cardDate}
              placeholder="Vencimento do cartão"
              onChange={(e) => handleChange(e)}
              options={{ date: true, datePattern: ["m", "y"] }}
            />
          </p>
          <p className="formContent">
            <FiLock className="formIcon" />
            <Cleave
              className="formInput"
              name="cardCode"
              value={checkoutData.cardCode}
              maxLength="4"
              placeholder="Codigo de segurança do cartão"
              onChange={(e) => handleChange(e)}
              options={{numericOnly: true}}
            />
          </p>
        </>
      ) : (
        <>
          <p className="formContent">
            <FiCreditCard className="formIcon" />
            <span className="formInput">
              {checkoutData.cardNumber || "Edite o número do cartão"}
            </span>
          </p>
          <p className="formContent">
            <FiCalendar className="formIcon" />
            <span className="formInput">
              {checkoutData.cardDate || "Edite a data de vencimento do cartão"}
            </span>
          </p>
          <p className="formContent">
            <FiLock className="formIcon" />
            <span className="formInput">
              {checkoutData.cardCode || "Edite o código de segurança do cartão"}
            </span>
          </p>
        </>
      )}
      {payEdit && (
        <button className="formButton" onClick={() => setPayEdit(!payEdit)}>
          Salvar
        </button>
      )}
    </Card>
  );
};

Payment.propTypes = {
  checkoutData: PropTypes.any,
  handleChange: PropTypes.func,
  payEdit: PropTypes.any,
  setPayEdit: PropTypes.func,
};

export default Payment;
