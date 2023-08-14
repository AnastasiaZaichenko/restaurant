import { combineReducers } from "redux";
import waiterReducer from "./waiterReducer";
import tableReducer from "./tableReducer";
import orderReducer from "./orderReducer";
import dishReducer from "./dishReducer";

export const rootReducer = combineReducers({
  waiter: waiterReducer,
  table: tableReducer,
  order: orderReducer,
  dish: dishReducer,
});
