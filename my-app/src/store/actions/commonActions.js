import OrderApi from "../../api/OrderApi";
import TableApi from "../../api/TableApi";
import WaiterApi from "../../api/WaiterApi";
import { setOrderList } from "./orderActions";
import { setTableList } from "./tableActions";
import { setWaiterList } from "./waiterActions";
import showError from "../../extra/showErrors";

export function fetchCommonActions() {
  return (dispatch) => {
    Promise.all([OrderApi.getList(), TableApi.getList(), WaiterApi.getList()])
      .then((res) => {
        dispatch(setOrderList(res[0]));
        dispatch(setTableList(res[1]));
        dispatch(setWaiterList(res[2]));
      })
      .catch((e) => showError(e));
  };
}
