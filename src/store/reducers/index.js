import {combineReducers} from "redux"
import Clothing from "./Clothing"
import Shoes from "./Shoes"

const reducers = combineReducers({
  Clothing,
  Shoes
})

export default reducers