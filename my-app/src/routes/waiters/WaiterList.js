import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWaiterList } from "../../store/selectors";
import WaiterItems from "./WaiterItems";
import { fetchWaiterList } from "../../store/actions/waiterActions";
import style from "../commonStyle.module.css";

export default function WaiterList() {
  const dispatch = useDispatch();
  const list = useSelector(selectWaiterList);
  const waiterList = list.map((waiter) => (
    <WaiterItems key={waiter.id} waiter={waiter} />
  ));

  useEffect(() => {
    dispatch(fetchWaiterList());
  }, [dispatch]);

  return (
    <div className={style.body_box}>
      <ul className={style.list}>
        <li className={style.capture}>
          <span>Name</span>
          <span>Phone</span>
        </li>
        {waiterList}
      </ul>
      <button className={style.button_create} type="button">
        <Link to="/waiter/create">Create a new waiter</Link>
      </button>
    </div>
  );
}
