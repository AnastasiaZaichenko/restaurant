import DishApi from "../../api/DishApi";
import showError from "../../extra/showErrors";
export const SET_DISH_LIST = "ACTION_SET_DISH_LIST";
export const DELETE_DISH = "DELETE_DISH";
export const UPDATE_DISH = "UPDATE_DISH";
export const CREATE_DISH = "CREATE_DISH";
export const SET_EDIT_DISH = "SET_EDIT_DISH";

export function fetchDishList() {
  return (dispatch) => {
    DishApi.getList()
      .then((serverList) => {
        dispatch(setDishList(serverList));
      })
      .catch((e) => showError(e));
  };
}

export function deleteDish(dish) {
  return (dispatch) => {
    DishApi.delete(dish.id)
      .then(() => {
        dispatch(remove(dish));
      })
      .catch((e) => showError(e));
  };
}

export function save(dish) {
  return (dispatch) => {
    if (dish.id) {
      DishApi.update(dish.id, dish)
        .then((dish) => {
          dispatch(updateList(dish));
        })
        .catch((e) => showError(e));
    } else {
      DishApi.create(dish)
        .then((serverDish) => {
          dispatch(create(serverDish));
        })
        .catch((e) => showError(e));
    }
  };
}

export function setDishList(serverList) {
  return { type: SET_DISH_LIST, payload: serverList };
}
export function setEditDish(dish) {
  return { type: SET_EDIT_DISH, payload: dish };
}

export function create(dish) {
  return { type: CREATE_DISH, payload: dish };
}

export function updateList(dish) {
  return { type: UPDATE_DISH, payload: dish };
}

export function remove(dish) {
  return { type: DELETE_DISH, payload: dish };
}
