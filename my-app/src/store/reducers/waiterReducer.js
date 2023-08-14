import { SET_WAITER_LIST } from "../actions/waiterActions";

const DEFAULT_WAITER = {
  firstName: "",
  phone: "",
};
const initialState = {
  list: [],
  waiterEdit: DEFAULT_WAITER,
};

export default function waiterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_WAITER_LIST: {
      return { ...state, list: payload, waiterEdit: DEFAULT_WAITER };
    }

    default:
      return state;
  }
}
