import { combineReducers } from "redux";
import Products from "./Products";
import Cart from "./Cart";
import Checkout from "./Checkout"

const reducers = combineReducers({
  Products,
  Cart,
  Checkout
});

export default reducers;
