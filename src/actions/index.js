import { CHANGE_PRICE } from "./types";

export const changePrice = (ourPrice, listPrice) => {
  return {
    type: CHANGE_PRICE,
    ourPrice,
    listPrice
  };
}
