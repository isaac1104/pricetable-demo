import { CHANGE_PRICE, RESET_PRICE } from "../actions/types";

const initialState = {
  ourPrice: "",
  listPrice: "",
}

function changePriceReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_PRICE:
      return {
        ...state,
        ourPrice: action.ourPrice,
        listPrice: action.listPrice
      };
    case RESET_PRICE:
      return {
        ...state,
        ourPrice: action.ourPrice,
        listPrice: action.listPrice
      };
    default:
      return state;
  }
}

export default changePriceReducer;
