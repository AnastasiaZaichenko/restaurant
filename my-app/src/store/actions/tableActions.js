import TableApi from "../../api/TableApi";
import showError from "../../extra/showErrors";
export const SET_TABLE_LIST = "SET_TABLE_DISH";
export const CREATE_TABLE = "CREATE_TABLE";
export const CLEAR_TABLE_FORM = "CLEAR_TABLE_FORM";
export const DELETE_TABLE = "DELETE_TABLE";
export const CREATE_EDIT_TABLE = "ACTION_CREATE_EDIT_TABLE";
export const UPDATE_TABLE = "UPDATE_TABLE";

export function fetchTableList() {
  return (dispatch) => {
    TableApi.getList().then((serverList) => {
      dispatch(setTableList(serverList));
    });
  };
}

export function setTableList(serverList) {
  return { type: SET_TABLE_LIST, payload: serverList };
}

export function save(table) {
  return (dispatch) => {
    if (table.id) {
      TableApi.update(table.id, table)
        .then((table) => {
          dispatch(updateList(table));
        })
        .catch((e) => showError(e));
    } else {
      TableApi.create(table)
        .then((serverTable) => {
          dispatch(create(serverTable));
        })
        .catch((e) => showError(e));
    }
  };
}

export function deleteTable(table) {
  return (dispatch) => {
    TableApi.delete(table.id)
      .then(() => {
        dispatch(remove(table));
      })
      .catch((e) => showError(e));
  };
}

export function updateList(table) {
  return { type: UPDATE_TABLE, payload: table };
}

export function create(serverTable) {
  return { type: CREATE_TABLE, payload: serverTable };
}

export function clearForm() {
  return { type: CLEAR_TABLE_FORM };
}

export function remove(table) {
  return { type: DELETE_TABLE, payload: table };
}

export function setEditTable(table) {
  return { type: CREATE_EDIT_TABLE, payload: table };
}
