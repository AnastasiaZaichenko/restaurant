import OrderApi from "../../api/OrderApi";
import showError from "../../extra/showErrors";

export const SET_ORDER_LIST = "SET_ORDER_LIST";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const CREATE_ORDER = "CREATE_ORDER";

export function fetchOrderList() {
  return (dispatch) => {
    OrderApi.getList().then((serverList) => {
      dispatch(setOrderList(serverList));
    });
  };
}

export function save(order) {
  return (dispatch) => {
    if (order.id) {
      OrderApi.update(order.id, order)
        .then((dish) => {
          dispatch(updateList(order));
        })
        .catch((e) => showError(e));
    } else {
      OrderApi.create(order)
        .then((serverDish) => {
          dispatch(create(serverDish));
        })
        .catch((e) => showError(e));
    }
  };
}

export function setOrderList(serverList) {
  return { type: SET_ORDER_LIST, payload: serverList };
}

export function updateList(order) {
  return { type: UPDATE_ORDER, payload: order };
}

export function create(serverDish) {
  return { type: CREATE_ORDER, payload: serverDish };
}
