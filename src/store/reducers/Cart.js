const Cart = (state = {ids: [], products: []}, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {...state, ids: [...state.ids, action.id]};
    case "GET_BY_ID":
      return {...state, products: action.products};
    default:
      return state;
  }
};

export default Cart;
