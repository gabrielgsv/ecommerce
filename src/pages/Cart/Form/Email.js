import PropTypes from "prop-types";
import React from "react";
import Card from "../../../components/Card";
import { MdModeEdit } from "react-icons/md";
import { FiAtSign } from "react-icons/fi";
import Cleave from 'cleave.js/react';

import "./form.css";

const Email = ({ emailEdit, setEmailEdit, handleChange, checkoutData }) => {
  return (
    <Card>
      <div className="formTitle">
        Email
        <div className="formEdit" onClick={() => setEmailEdit(!emailEdit)}>
          <MdModeEdit />
        </div>
      </div>
      <p className="formContent">
        <FiAtSign className="formIcon" />
        {emailEdit ? (
          <>
            <Cleave
              className="formInput"
              name="email"
              value={checkoutData.email}
              placeholder="email"
              maxLength="50"
              onChange={(e) => handleChange(e)}
              options={{email: true}}
              autoFocus
            />
          </>
        ) : (
          <span className="formInput">{checkoutData.email || "Adicione seu email"}</span>
        )}
      </p>
      {emailEdit && (
        <button className="formButton" onClick={() => setEmailEdit(!emailEdit)}>
          Salvar
        </button>
      )}
    </Card>
  );
};

Email.propTypes = {
  checkoutData: PropTypes.any,
  emailEdit: PropTypes.any,
  handleChange: PropTypes.func,
  setEmailEdit: PropTypes.func,
};

export default Email;
