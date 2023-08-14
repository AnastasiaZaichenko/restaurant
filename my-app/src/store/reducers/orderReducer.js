import { SET_ORDER_LIST } from "../actions/orderActions";

export const DEFAULT_ORDER = {
  waiterId: "",
  tableId: "",
  dishes: [],
};

export const initialState = {
  list: [],
  orderEdit: DEFAULT_ORDER,
};

export default function orderReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ORDER_LIST:
      return { ...state, list: payload, orderEdit: DEFAULT_ORDER };
    default:
      return state;
  }
}
