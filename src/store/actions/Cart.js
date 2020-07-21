export function addToCart(id) {
  return (dispatch) => {
    dispatch({
      type: "ADD_TO_CART",
      id,
    });
  };
}

export function getById() {
  return (dispatch, getState) => {
    const products = getState().Products;
    const ids = getState().Cart.ids;

    let result = [];

    if (ids) {
      ids.forEach((id) => {
        result = [
          ...result,
          ...products.filter((product) => product.id === id),
        ];
      });
    }

    dispatch({
      type: "GET_BY_ID",
      products: result,
    });
  };
}

export function removeByIndex(index, callback) {
  return (dispatch) => {
    callback()
    dispatch({
      type: "REMOVE_BY_INDEX",
      index
    })
  }
}

export function removeAllProducts() {
  return (dispatch) => {
    dispatch({
      type: "REMOVE_ALL_PRODUCTS"
    })
  }
}