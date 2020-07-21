import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Email from "./Email";
import Ship from "./Ship";
import Payment from "./Payment";
import { saveData } from "../../../store/actions/Checkout";
import "./form.css";

const Form = () => {
  const dispatch = useDispatch();
  const [emailEdit, setEmailEdit] = useState(false);
  const [shipEdit, setShipEdit] = useState(false);
  const [payEdit, setPayEdit] = useState(false);

  const CheckoutData = useSelector((state) => state.Checkout);

  function handleChange(e) {
    dispatch(saveData(e.target.name, e.target.value));
  }

  return (
    <>
      <Email
        emailEdit={emailEdit}
        setEmailEdit={setEmailEdit}
        checkoutData={CheckoutData}
        handleChange={(e) => handleChange(e)}
      />
      <Ship
        shipEdit={shipEdit}
        setShipEdit={setShipEdit}
        checkoutData={CheckoutData}
        handleChange={(e) => handleChange(e)}
      />
      <Payment
        payEdit={payEdit}
        setPayEdit={setPayEdit}
        checkoutData={CheckoutData}
        handleChange={(e) => handleChange(e)}
      />
    </>
  );
};

export default Form;
