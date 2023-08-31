import WaiterApi from "../../api/WaiterApi";
import showError from "../../extra/showErrors";
export const SET_WAITER_LIST = "SET_WAITER_LIST";
export const DELETE_WAITER = "DELETE_WAITER";
export const SET_EDIT_WAITER = "SET_EDIT_WAITER";
export const UPDATE_WAITER = "UPDATE_WAITER";
export const CREATE_WAITER = "CREATE_WAITER";

export function fetchWaiterList() {
  return (dispatch) => {
    WaiterApi.getList().then((serverList) => {
      dispatch(setWaiterList(serverList));
    });
  };
}

export function deleteWaiter(waiter) {
  return (dispatch) => {
    WaiterApi.delete(waiter.id)
      .then(() => {
        dispatch(remove(waiter));
      })
      .catch((e) => showError(e));
  };
}

export function save(waiter) {
  return (dispatch) => {
    if (waiter.id) {
      WaiterApi.update(waiter.id, waiter)
        .then((waiter) => {
          dispatch(updateList(waiter));
        })
        .catch((e) => showError(e));
    } else {
      WaiterApi.create(waiter)
        .then((serverWaiter) => {
          dispatch(create(serverWaiter));
        })
        .catch((e) => showError(e));
    }
  };
}
// export function save(table) {
//   return (dispatch) => {
//     if (table.id) {
//       TableApi.update(table.id, table)
//         .then((table) => {
//           dispatch(updateList(table));
//         })
//         .catch((e) => showError(e));
//     } else {
//       TableApi.create(table)
//         .then((serverTable) => {
//           dispatch(create(serverTable));
//         })
//         .catch((e) => showError(e));
//     }
//   };
// }

export function create(waiter) {
  return { type: CREATE_WAITER, payload: waiter };
}

export function updateList(waiter) {
  return { type: UPDATE_WAITER, payload: waiter };
}

export function remove(waiter) {
  return { type: DELETE_WAITER, payload: waiter };
}

export function setWaiterList(serverList) {
  return { type: SET_WAITER_LIST, payload: serverList };
}

export function setEditWaiter(waiter) {
  return { type: SET_EDIT_WAITER, payload: waiter };
}
