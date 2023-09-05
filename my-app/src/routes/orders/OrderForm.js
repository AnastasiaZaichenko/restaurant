import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { selectOrderEdit, selectOptions } from "../../store/selectors/index";
import OrderOptionsTable from "./OrderOptionsTable";
import OrderOptionsWaiter from "./OrderOptionsWaiter";
import OrderOptionsDish from "./OrderOptionsDish";
// import getDishList from "../../extra/getDishList";
// import { save } from "../../store/actions/orderActions";
import { fetchJointListTbWtDs } from "../../store/actions/commonActions";

export default function OrderForm() {
  // const tableEdit = useSelector(selectTableEdit);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const orderEdit = useSelector(selectOrderEdit);
  const list = useSelector(selectOptions);
  const [valueTable, setValueTable] = useState("");
  const [valueWaiter, setValueWaiter] = useState("");
  const [valueDish, setValueDish] = useState("");
  const [valueInput, setValueInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // const dishList = getDishList(valueDish);
    // //в гет диш передать список который получим из блюд//
    // const order = {
    //   ...orderEdit,
    //   // ...value,
    //   dishes: dishList,
    // };

    // dispatch(save(order));
    navigate("/order");
  }

  useEffect(() => {
    dispatch(fetchJointListTbWtDs());
  }, [dispatch]);

  function handleChangeTable(event) {
    setValueTable(event.target.valueTable);
  }
  function handleChangeWaiter(event) {
    setValueWaiter(event.target.valueWaiter);
  }
  function handleChangeDish(event) {
    setValueDish(event.target.valueDish);
  }

  function onInputChange(event) {
    setValueInput(event.target.valueInput);
  }
  const tableList = list.table.map((table) => (
    <OrderOptionsTable key={table.id} table={table} />
  ));
  const waiterList = list.waiter.map((waiter) => (
    <OrderOptionsWaiter key={waiter.id} waiter={waiter} />
  ));
  const dishList = list.dish.map((dish) => (
    <OrderOptionsDish key={dish.id} dish={dish} />
  ));

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Выберите номер вашего столика :
          <select value={valueTable} onChange={handleChangeTable}>
            {tableList}
          </select>
        </label>
      </div>
      <div>
        <label>
          Выберите имя вашего официанта :
          <select value={valueWaiter} onChange={handleChangeWaiter}>
            {waiterList}
          </select>
        </label>
      </div>
      <div>
        <span>
          <label>
            Выберите блюдо :
            <select value={valueDish} onChange={handleChangeDish}>
              {dishList}
            </select>
          </label>
        </span>
        <span>
          <label>Введите количество блюд :</label>
          <input type="number" value={valueInput} onChange={onInputChange} />
        </span>
      </div>
      <div>
        <button type="button">Добавить блюдо +</button>
      </div>
      <div>
        <button type="submit">Отправить</button>
        {/* <input type="submit" value="Отправить" /> */}
      </div>
    </form>
  );
}
