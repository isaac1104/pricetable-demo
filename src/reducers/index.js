import { combineReducers } from "redux";
import changePriceReducer from "./change_price_reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  price: changePriceReducer,
  form: formReducer
});

export default rootReducer;
