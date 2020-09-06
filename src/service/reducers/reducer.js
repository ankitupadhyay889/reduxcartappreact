import { ADD_TO_CART } from "../constants";
const initialState = {
  cardData: [],
};
export default function cardItems(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("reducer", action);
      return {
        ...state,
        cardData: action.data,
      };
    default:
      return state;
  }
}
