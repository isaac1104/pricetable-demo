import { CHANGE_PRICE, RESET_PRICE } from "./types";

export const changePrice = (ourPrice, listPrice) => {
  return {
    type: CHANGE_PRICE,
    ourPrice,
    listPrice
  };
}

export const resetPrice = () => {
  return {
    type: RESET_PRICE,
    ourPrice: "",
    listPrice: ""
  }
}
