const Cart = (state = { ids: [], products: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, ids: [...state.ids, action.id] };
    case "GET_BY_ID":
      return { ...state, products: action.products };
    case "REMOVE_BY_INDEX": {
      let ids = state.ids
      ids.splice(action.index, 1);

      let products = state.products
      products.splice(action.index, 1);
      
      console.log(ids)
      console.log(products)
      return { ...state, ids, products };
    }
    case "REMOVE_ALL_PRODUCTS": {
      return { ids: [], products: [] };
    }
    default:
      return state;
  }
};

export default Cart;
