import {
  SET_TABLE_LIST,
  CREATE_TABLE,
  DELETE_TABLE,
  SET_EDIT_TABLE,
  UPDATE_TABLE,
} from "../actions/tableActions";

export const DEFAULT_TABLE = {
  number: "",
};

export const initialState = {
  list: [],
  tableEdit: DEFAULT_TABLE,
};

export default function tableReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_TABLE_LIST:
      return { ...state, list: payload, tableEdit: DEFAULT_TABLE };

    case CREATE_TABLE: {
      return {
        ...state,
        list: [...state.list, { ...payload }],
      };
    }
    case DELETE_TABLE:
      const newList = state.list.filter((table) => table.id !== payload.id);
      return { ...state, list: newList };

    case UPDATE_TABLE: {
      const updateList = state.list.map((table) =>
        table.id === payload.id ? payload : table
      );
      return { ...state, list: updateList, tableEdit: DEFAULT_TABLE };
    }
    case SET_EDIT_TABLE: {
      return { ...state, tableEdit: payload };
    }
    default:
      return state;
  }
}
