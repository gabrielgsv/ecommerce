const initialState = {
  email: "",
  name: "",
  address: "",
  phoneNumber: "",
  cardNumber: "",
  cardDate: "",
  cardCode: ""
}

const Checkout = (state = initialState, action) => {
  const { type, inputName, data } = action;
  switch (type) {
    case "SAVE_DATA":
      return { ...state, [inputName]: data };
    default:
      return state;
  }
};

export default Checkout