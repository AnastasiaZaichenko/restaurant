import { deleteWaiter, setEditWaiter } from "../../store/actions/waiterActions";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import style from "../commonStyle.module.css";

export default function WaiterItems({ waiter }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onEditBtnClick() {
    if (waiter) {
      dispatch(setEditWaiter(waiter));
      navigate(`/waiter/${waiter.id}/edit`);
    }
  }
  function onDeleteBtnClick() {
    dispatch(deleteWaiter(waiter));
  }

  return (
    <li className={style.list_item}>
      <div className={style.datas_box}>
        <span className={style.datas_firstname}>{waiter.firstName}</span>
        <span className={style.datas_phone}>{waiter.phone}</span>
      </div>
      <div className={style.buttons_box}>
        <button className={style.button_edit} onClick={onEditBtnClick}>
          Edit
        </button>

        <button className={style.button_delete} onClick={onDeleteBtnClick}>
          Delete
        </button>
      </div>
    </li>
  );
}
