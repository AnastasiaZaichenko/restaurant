import {
  SET_DISH_LIST,
  DELETE_DISH,
  UPDATE_DISH,
  CREATE_DISH,
  SET_EDIT_DISH,
} from "../actions/dishActions";

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
    case CREATE_DISH:
      return { ...state, list: [...state.list, { ...payload }] };
    case DELETE_DISH:
      const newList = state.list.filter((dish) => dish.id !== payload.id);
      return { ...state, list: newList };
    case UPDATE_DISH:
      const updateList = state.list.map((dish) =>
        dish.id === payload.id ? payload : dish
      );
      return { ...state, list: updateList, dishEdit: DEFAULT_DISH };
    case SET_EDIT_DISH:
      return { ...state, dishEdit: payload };
    default:
      return state;
  }
}
