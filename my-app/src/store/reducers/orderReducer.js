import {
  SET_ORDER_LIST,
  UPDATE_ORDER,
  CREATE_ORDER,
} from "../actions/orderActions";

export const DEFAULT_ORDER = {
  // waiterId: "",
  // tableId: "",
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
    case UPDATE_ORDER:
      const updateList = state.list.map((order) =>
        order.id === payload.id ? payload : order
      );
      return { ...state, list: updateList, orderEdit: DEFAULT_ORDER };
    case CREATE_ORDER:
      return {
        ...state,
        list: [...state.list, { ...payload }],
      };
    default:
      return state;
  }
}
