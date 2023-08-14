import OrderApi from "../../api/OrderApi";

export const SET_ORDER_LIST = "SET_ORDER_LIST";

export function fetchOrderList() {
  return (dispatch) => {
    OrderApi.getList().then((serverList) => {
      dispatch(setOrderList(serverList));
    });
  };
}

export function setOrderList(serverList) {
  return { type: SET_ORDER_LIST, payload: serverList };
}
