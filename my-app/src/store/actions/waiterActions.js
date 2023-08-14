import WaiterApi from "../../api/WaiterApi";
export const SET_WAITER_LIST = "SET_WAITER_LIST";
export function fetchWaiterList() {
  return (dispatch) => {
    WaiterApi.getList().then((serverList) => {
      dispatch(setWaiterList(serverList));
    });
  };
}

export function setWaiterList(serverList) {
  return { type: SET_WAITER_LIST, payload: serverList };
}
