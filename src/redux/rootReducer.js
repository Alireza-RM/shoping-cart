import { combineReducers } from "redux";
import productReducer from "./products/productsReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  productsState: productReducer,
  cartState: cartReducer,
});

export default rootReducer;
