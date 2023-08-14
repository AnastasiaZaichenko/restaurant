import DishApi from "../../api/DishApi";
import showError from "../../extra/showErrors";
export const SET_DISH_LIST = "ACTION_SET_DISH_LIST";

export function fetchDishList() {
  return (dispatch) => {
    DishApi.getList()
      .then((serverList) => {
        dispatch(setDishList(serverList));
      })
      .catch((e) => showError(e));
  };
}

export function setDishList(serverList) {
  return { type: SET_DISH_LIST, payload: serverList };
}
