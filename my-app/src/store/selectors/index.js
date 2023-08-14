import { createSelector } from "reselect";

export const selectDishList = (state) => state.dish.list;

export const selectOrderList = (state) => state.order.list;

export const selectTableList = (state) => state.table.list;
export const selectTableEdit = (state) => state.table.tableEdit;

export const selectWaiterList = (state) => state.waiter.list;

export const selectCommonList = createSelector(
  selectTableList,
  selectWaiterList,
  selectOrderList,
  (tableList, waiterList, orderList) => {
    const newTableList = tableList.reduce((list, table) => {
      list[table.id] = table;
      return list;
    }, {});
    const newWaiterList = waiterList.reduce((list, waiter) => {
      list[waiter.id] = waiter;
      return list;
    }, {});
    return orderList.map((order) => ({
      ...order,
      table: newTableList[order.tableId],
      waiter: newWaiterList[order.waiterId],
    }));
  }
);
