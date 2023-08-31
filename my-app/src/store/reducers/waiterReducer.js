import {
  SET_WAITER_LIST,
  DELETE_WAITER,
  SET_EDIT_WAITER,
  UPDATE_WAITER,
  CREATE_WAITER,
} from "../actions/waiterActions";

export const DEFAULT_WAITER = {
  firstName: "",
  phone: "",
};
export const initialState = {
  list: [],
  waiterEdit: DEFAULT_WAITER,
};

export default function waiterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_WAITER_LIST: {
      return { ...state, list: payload, waiterEdit: DEFAULT_WAITER };
    }
    case CREATE_WAITER: {
      return { ...state, list: [...state.list, { ...payload }] };
    }

    case UPDATE_WAITER: {
      const updateList = state.list.map((waiter) =>
        waiter.id === payload.id ? payload : waiter
      );
      return { ...state, list: updateList, waiterEdit: DEFAULT_WAITER };
    }

    case DELETE_WAITER: {
      const newList = state.list.filter((waiter) => waiter.id !== payload.id);

      return { ...state, list: newList };
    }

    case SET_EDIT_WAITER: {
      return { ...state, waiterEdit: payload };
    }

    default:
      return state;
  }
}
