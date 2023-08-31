import { createSelector } from "reselect";

export const selectDishList = (state) => state.dish.list;
export const selectDishEdit = (state) => state.dish.dishEdit;

export const selectOrderList = (state) => state.order.list;
export const selectOrderEdit = (state) => state.order.orderEdit;

export const selectTableList = (state) => state.table.list;
export const selectTableEdit = (state) => state.table.tableEdit;

export const selectWaiterList = (state) => state.waiter.list;
export const selectWaiterEdit = (state) => state.waiter.waiterEdit;

export const selectCommonList = createSelector(
  selectTableList,
  selectWaiterList,
  selectOrderList,

  (tableList, waiterList, orderList) => {
    console.log(tableList);
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
      table: newTableList,
      waiter: newWaiterList,
    }));
  }
);

export const selectOptions = createSelector(
  selectTableList,
  selectWaiterList,
  selectDishList,
  (tableList, waiterList, dishList) => {
    const newTableList = tableList.map((table) => {
      return {
        label: table.number,
        id: table.id,
      };
    });

    const newWaiterList = waiterList.map((waiter) => {
      return {
        label: waiter.firstName,
        id: waiter.id,
      };
    });

    const newDishList = dishList.map((dish) => {
      return {
        label: dish.name,
        id: dish.id,
      };
    });

    return {
      table: newTableList,
      waiter: newWaiterList,
      dish: newDishList,
    };
  }
);
