import { SET_DISH_LIST } from "../actions/dishActions";

export const DEFAULT_DISH = {
  name: "",
  description: "",
  price: "",
};

const initialState = {
  list: [],
  dishEdit: DEFAULT_DISH,
};

export default function dishReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_DISH_LIST:
      return { ...state, list: payload, dishEdit: DEFAULT_DISH };
    default:
      return state;
  }
}
